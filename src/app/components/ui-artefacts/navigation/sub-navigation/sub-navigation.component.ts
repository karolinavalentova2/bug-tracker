import {Component, Input, OnInit} from '@angular/core';
import {IconsURIs} from '../../../../models/icons';
import {NavigationService} from '../../../../services/navigation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.scss']
})
export class SubNavigationComponent implements OnInit {
  @Input() categoryInfo: {
    path: string;
    title: string;
    entries: Array<any>
  };
  parentChildrenPaths = new Set();

  isActive = false;

  isParentActive = false;
  navigationSub: Subscription;

  icons = IconsURIs;
  currentActivePath: string;

  constructor(public navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.doSetup();
  }

  private doSetup() {
    if (this.categoryInfo.title !== 'Separator') {
      if (this.categoryInfo.entries) {
        this.categoryInfo.entries.forEach(entry => {
          this.parentChildrenPaths.add(entry.path);
        });
      }

      this.navigationSub = this.navigationService.doListenToNavigationPathChanges()
        .subscribe(this.doHandleNavigationPathChanged.bind(this));

      const tempPath = this.navigationService.doReturnLastActiveURLPath();
      if (tempPath) {
        this.doDecideIfActive(tempPath);
      }
    }
  }

  private async doHandleNavigationPathChanged(path: string): Promise<void> {
    try {
      if (!this.categoryInfo.entries && path.includes(this.categoryInfo.path)) {
        this.isActive = true;
        this.isParentActive = true;
      } else {
        this.isActive = false;
        this.isParentActive = false;
        this.doDecideIfActive(path);
      }
    } catch (e) {
      console.error(e);
    }
  }

  private doDecideIfActive(path) {
    if (path.includes(this.categoryInfo.path)) { // FYI: This redirects the window to the first child of a parent if the parent is clicked
      this.navigationService.doNavigate(this.categoryInfo.entries[0].path);
      return;
    }

    if (this.parentChildrenPaths.has(path)) {
      this.isActive = true;
      this.currentActivePath = path;
      return;
    }
  }

  public toggleCollapsible() {
    this.navigationService.doNavigate(this.categoryInfo.path);
  }

}
