(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\n/* EXAMPLE OF THE NAMING\nelementName__weight, regular weight is by default\n__m = medium\n__t = thin\n__sm = semibold\n..etc\n */\n.header3__m {\n  font-size: 3rem;\n  font-weight: 500;\n}\n.header2__m {\n  font-size: 2rem;\n  font-weight: 500;\n}\n.par2 {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.par3 {\n  font-size: 1.3rem;\n  font-weight: 400;\n}\n.par3__m {\n  font-weight: 500;\n}\n.par5 {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\n/* ************************************* */\n/* *********** BUTTON RESET ************ */\nbutton {\n  -webkit-appearance: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  color: transparent;\n}\n.add-new-button {\n  padding: 0.7rem 2rem;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: 500;\n  background-color: #668CF6;\n  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.add-new-button:hover {\n  background-color: #4773EC;\n}\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\n.arrow-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  transition: all 0.3s;\n}\n.arrow-icon__rotate {\n  transform: rotate(-180deg);\n  transition: all 0.3s;\n}\n.table-profile {\n  display: flex;\n  align-items: center;\n}\n.table-profile__icon {\n  width: 3rem;\n  height: 3rem;\n  margin-right: 1rem;\n}\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\n/* Reset */\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n}\n/********************************/\n/******* Custom checkbox ********/\n.input-checkbox {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #fff;\n  border-radius: 5rem;\n  border: 0.1rem solid #8D93A4;\n  margin-right: 0.5rem;\n}\n.input-checkbox:checked {\n  background-color: #668CF6;\n  border: 0.4rem solid #fff;\n  box-shadow: 0 0 0 0.1rem #668CF6;\n}\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\n.side-navigation {\n  position: fixed;\n  left: 0;\n  top: 5rem;\n  width: 20rem;\n  height: calc(100vh - 5rem);\n  background-color: #2F313B;\n  color: #D5D5D5;\n  padding: 2rem 0;\n}\n.side-navigation p {\n  font-size: 1.5rem;\n}\n.side-navigation__separator {\n  margin: 1.5rem;\n  width: auto;\n  height: 0.2rem;\n  background-color: #565C6E;\n}\n.side-navigation__title {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  padding: 0 1.5rem;\n  justify-content: space-between;\n}\n.side-navigation__title__highlight {\n  background-color: #565C6E;\n}\n.side-navigation__title .pathfinder {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.side-navigation__title .pathfinder .notification {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 5rem;\n  background-color: #F66679;\n  margin-left: 1rem;\n  margin-top: -0.7rem;\n  -webkit-animation: pulse 1s infinite;\n          animation: pulse 1s infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n.side-navigation__title .highlighter {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible {\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.side-navigation__collapsible__subtitle {\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  padding: 0 4rem;\n  background-color: #222831;\n}\n.side-navigation__collapsible__subtitle .highlighter {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle .pathfinder {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.side-navigation__collapsible__subtitle__highlight {\n  background-color: #3A3C49;\n  color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle p {\n  color: #8D93A4;\n}\n.collapsible-visible {\n  padding-bottom: 2rem;\n  height: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.3s;\n}\n.collapse-trigger {\n  cursor: pointer;\n}\n.nav-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n.svg-fill {\n  fill: #fff;\n}\n.svg-fill__l-Grey {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey {\n  fill: #8D93A4;\n}\napp-my-projects,\napp-active-projects,\napp-completed-projects,\napp-inbox {\n  display: flex;\n  flex-direction: row;\n}\n.main-view {\n  width: calc(100% - 17rem);\n  padding: 3rem 5rem;\n  margin-left: 17rem;\n}\n.main-view__header {\n  padding-bottom: 4rem;\n  display: flex;\n  justify-content: space-between;\n}\n.main-view__header__headline h1 {\n  color: #3A3C49;\n  padding-bottom: 1rem;\n}\n.main-view__header__headline p {\n  color: #8D93A4;\n}\n/* reset */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*:focus {\n  outline: none;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: unset;\n}\nhtml {\n  font-size: 62.5%;\n  font-family: Roboto, sans-serif;\n}\n@media screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\nbody {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcYnV0dG9ucy5zY3NzIiwic3JjL3N0eWxlcy9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcaWNvbnMuc2NzcyIsInNyYy9zdHlsZXMvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXGZvcm1zLnNjc3MiLCJzcmMvc3R5bGVzL0Y6XFxzY2hvb2xcXEZpbmFsLWV4YW1cXGJ1Zy10cmFja2VyL3NyY1xcc3R5bGVzXFxnZW5lcmFsXFxuYXZpZ2F0aW9uLnNjc3MiLCJzcmMvc3R5bGVzL0Y6XFxzY2hvb2xcXEZpbmFsLWV4YW1cXGJ1Zy10cmFja2VyL3NyY1xcc3R5bGVzXFxnZW5lcmFsXFxsYXlvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPUSw2SkFBQTtBQ1VSO0VBQ0UsVUFsQlk7QUNHZDtBRGlCRTtFQUNFLGFBbEJlO0FDR25CO0FEa0JFO0VBQ0UsYUFyQmdCO0FDS3BCO0FDVEE7Ozs7OztFQUFBO0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjtBQ1JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEV0Y7QUNKQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QURPRjtBQ0pBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBRE9GO0FDTEU7RUFDRSxnQkFBQTtBRE9KO0FDSEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FETUY7QUQzQkE7RUFDRSxVQWxCWTtBQ2dEZDtBRDVCRTtFQUNFLGFBbEJlO0FDZ0RuQjtBRDNCRTtFQUNFLGFBckJnQjtBQ2tEcEI7QUVyREEsMENBQUE7QUFDQSwwQ0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGdURGO0FFcERBO0VBQ0Usb0JBQUE7RUFDQSxXSGZZO0VHZ0JaLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkhOb0I7RUdPcEIsNkNBQUE7QUZ1REY7QUVyREU7RUFDRSx5QkhUdUI7QUNnRTNCO0FENURBO0VBQ0UsVUFsQlk7QUNpRmQ7QUQ3REU7RUFDRSxhQWxCZTtBQ2lGbkI7QUQ1REU7RUFDRSxhQXJCZ0I7QUNtRnBCO0FHckZBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBSHdGRjtBR3RGRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUh3Rko7QUdwRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUh1RkY7QUdyRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FIdUZKO0FEMUZBO0VBQ0UsVUFsQlk7QUMrR2Q7QUQzRkU7RUFDRSxhQWxCZTtBQytHbkI7QUQxRkU7RUFDRSxhQXJCZ0I7QUNpSHBCO0FJbkhBLFVBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUpzSEY7QUlwSEEsaUNBQUE7QUFDQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkxmWTtFS2dCWixtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUpzSEY7QUlwSEU7RUFDRSx5QkxUa0I7RUtVbEIseUJBQUE7RUFHQSxnQ0FBQTtBSnNISjtBRDlIQTtFQUNFLFVBbEJZO0FDbUpkO0FEL0hFO0VBQ0UsYUFsQmU7QUNtSm5CO0FEOUhFO0VBQ0UsYUFyQmdCO0FDcUpwQjtBS3ZKQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHlCTkRvQjtFTUVwQixjTk5pQjtFTU9qQixlQUFBO0FMMEpGO0FLeEpFO0VBQ0UsaUJBQUE7QUwwSko7QUt2SkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5Qk5mb0I7QUN3S3hCO0FLdEpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUx3Sko7QUt0Skk7RUFDRSx5Qk4xQmtCO0FDa0x4QjtBS3JKSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUx1Sk47QUtySk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Qk45QmE7RU0rQmIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUx1SlI7QUtySlE7RUFDRTtJQUFJLG9EQUFBO0VMd0paO0VLdkpRO0lBQUsscURBQUE7RUwwSmI7RUt6SlE7SUFBTSxrREFBQTtFTDRKZDtBQUNGO0FLM0pRO0VBQ0U7SUFFRSw0Q0FBQTtFTDZKVjtFSzNKUTtJQUVFLDZDQUFBO0VMNkpWO0VLM0pRO0lBRUUsMENBQUE7RUw2SlY7QUFDRjtBS3hKSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJObEVpQjtBQzROdkI7QUt2SkU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FMeUpKO0FLdkpJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5Qk5qRmU7QUMwT3JCO0FLdkpNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx5Qk50RmU7QUMrT3ZCO0FLdEpNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBTHdKUjtBS3JKTTtFQUNFLHlCTnBHVTtFTXFHVixjTmpHZTtBQ3dQdkI7QUtwSk07RUFDRSxjTjNHWTtBQ2lRcEI7QUtoSkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBTG1KRjtBS2hKQTtFQUNFLGVBQUE7QUxtSkY7QUtoSkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FMbUpGO0FEdFFBO0VBQ0UsVUFsQlk7QUMyUmQ7QUR2UUU7RUFDRSxhQWxCZTtBQzJSbkI7QUR0UUU7RUFDRSxhQXJCZ0I7QUM2UnBCO0FNL1JBOzs7O0VBSUUsYUFBQTtFQUNBLG1CQUFBO0FOa1NGO0FNL1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FOa1NGO0FNaFNFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QU5rU0o7QU0vUk07RUFDRSxjUGhCVTtFT2lCVixvQkFBQTtBTmlTUjtBTTlSTTtFQUNFLGNQdkJZO0FDdVRwQjtBRmxUQSxVQUFBO0FBQ0E7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUVvVEY7QUZqVEE7RUFDRSxhQUFBO0FFb1RGO0FGalRBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRW9URjtBRmpUQTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUVvVEY7QUZsVEU7RUFKRjtJQUtJLGlCQUFBO0VFcVRGO0FBQ0Y7QUZuVEU7RUFSRjtJQVNJLGNBQUE7RUVzVEY7QUFDRjtBRm5UQTtFQUNFLGtCQUFBO0FFc1RGIiwiZmlsZSI6InNyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9nZW5lcmFsL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nZW5lcmFsL3R5cG9ncmFwaHkuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2VuZXJhbC9idXR0b25zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dlbmVyYWwvaWNvbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2VuZXJhbC9mb3Jtcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nZW5lcmFsL25hdmlnYXRpb24uc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2VuZXJhbC9sYXlvdXQuc2Nzc1wiO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcblxuLyogcmVzZXQgKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTsgLy8xIHJlbSA9IDEwcHg7IDEwcHgvMTZweCA9IDYyLjUlXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7IC8vIFJvYm90byBpcyB0aGUgZGVmYXVsdCBmb250IGZhbWlseVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgICBmb250LXNpemU6IDU2LjI1JTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4iLCIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrZXItd2hpdGU6ICNmMmYzZjc7XHJcbiRjb2xvci12ZXJ5TGlnaHQtZ3JleTogI0RBRENFMTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRjb2xvci1tZWRpdW0tZ3JleTogIzhEOTNBNDtcclxuJGNvbG9yLW1lZGl1bURhcmstZ3JleTogIzU2NUM2RTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzNBM0M0OTtcclxuJGNvbG9yLXZlcnlEYXJrLWdyZXk6ICMyRjMxM0I7XHJcbiRjb2xvci1kYXJrZXN0LWdyZXk6ICMyMjI4MzE7XHJcblxyXG4kdGVydGlhcnktY29sb3ItZ3JlZW46ICM3M0QzQkU7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbi1kYXJrOiAjMkVDOUE3O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZTogIzY2OENGNjtcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyazogIzQ3NzNFQztcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZDogI0Y2NjY3OTtcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZC1kYXJrOiAjRUM0QjYwO1xyXG5cclxuLnN2Zy1maWxsIHtcclxuICBmaWxsOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICZfX2wtR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICB9XHJcblxyXG4gICZfX20tR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiKTtcbi5zdmctZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc3ZnLWZpbGxfX2wtR3JleSB7XG4gIGZpbGw6ICNENUQ1RDU7XG59XG4uc3ZnLWZpbGxfX20tR3JleSB7XG4gIGZpbGw6ICM4RDkzQTQ7XG59XG5cbi8qIEVYQU1QTEUgT0YgVEhFIE5BTUlOR1xuZWxlbWVudE5hbWVfX3dlaWdodCwgcmVndWxhciB3ZWlnaHQgaXMgYnkgZGVmYXVsdFxuX19tID0gbWVkaXVtXG5fX3QgPSB0aGluXG5fX3NtID0gc2VtaWJvbGRcbi4uZXRjXG4gKi9cbi5oZWFkZXIzX19tIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGVhZGVyMl9fbSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhcjIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBhcjMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYXIzX19tIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhcjUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogKioqKioqKioqKiogQlVUVE9OIFJFU0VUICoqKioqKioqKioqKiAqL1xuYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFkZC1uZXctYnV0dG9uIHtcbiAgcGFkZGluZzogMC43cmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OENGNjtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmFkZC1uZXctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzNFQztcbn1cblxuLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLmFycm93LWljb24ge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uYXJyb3ctaWNvbl9fcm90YXRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4udGFibGUtcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtcHJvZmlsZV9faWNvbiB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLyogUmVzZXQgKi9cbmlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKiogQ3VzdG9tIGNoZWNrYm94ICoqKioqKioqL1xuLmlucHV0LWNoZWNrYm94IHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM4RDkzQTQ7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmlucHV0LWNoZWNrYm94OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY4Q0Y2O1xuICBib3JkZXI6IDAuNHJlbSBzb2xpZCAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjNjY4Q0Y2O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjNjY4Q0Y2O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzY2OENGNjtcbn1cblxuLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLnNpZGUtbmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMTNCO1xuICBjb2xvcjogI0Q1RDVENTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuLnNpZGUtbmF2aWdhdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19zZXBhcmF0b3Ige1xuICBtYXJnaW46IDEuNXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1QzZFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZV9faGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NUM2RTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlIC5wYXRoZmluZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZSAucGF0aGZpbmRlciAubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY2Njc5O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwLjQpO1xuICB9XG4gIDcwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMC40KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gIH1cbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlIC5oaWdobGlnaHRlciB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNEM0JFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGUge1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlX19zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMCA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIC5oaWdobGlnaHRlciB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNEM0JFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIC5wYXRoZmluZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlX19oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQzQ5O1xuICBjb2xvcjogIzczRDNCRTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlX19zdWJ0aXRsZSBwIHtcbiAgY29sb3I6ICM4RDkzQTQ7XG59XG5cbi5jb2xsYXBzaWJsZS12aXNpYmxlIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGhlaWdodDogYXV0bztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5jb2xsYXBzZS10cmlnZ2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWljb24ge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG5hcHAtbXktcHJvamVjdHMsXG5hcHAtYWN0aXZlLXByb2plY3RzLFxuYXBwLWNvbXBsZXRlZC1wcm9qZWN0cyxcbmFwcC1pbmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5tYWluLXZpZXcge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xuICBwYWRkaW5nOiAzcmVtIDVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcbn1cbi5tYWluLXZpZXdfX2hlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbi12aWV3X19oZWFkZXJfX2hlYWRsaW5lIGgxIHtcbiAgY29sb3I6ICMzQTNDNDk7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLm1haW4tdmlld19faGVhZGVyX19oZWFkbGluZSBwIHtcbiAgY29sb3I6ICM4RDkzQTQ7XG59XG4vKiByZXNldCAqL1xuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdW5zZXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDU2LjI1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSIsIi8qIEVYQU1QTEUgT0YgVEhFIE5BTUlOR1xyXG5lbGVtZW50TmFtZV9fd2VpZ2h0LCByZWd1bGFyIHdlaWdodCBpcyBieSBkZWZhdWx0XHJcbl9fbSA9IG1lZGl1bVxyXG5fX3QgPSB0aGluXHJcbl9fc20gPSBzZW1pYm9sZFxyXG4uLmV0Y1xyXG4gKi9cclxuXHJcbi5oZWFkZXIzX19tIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmhlYWRlcjJfX20ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucGFyMV9fcyB7XHJcblxyXG59XHJcblxyXG4ucGFyMiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnBhcjMge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICZfX20ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXI1IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qICoqKioqKioqKioqIEJVVFRPTiBSRVNFVCAqKioqKioqKioqKiogKi9cclxuXHJcbmJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hZGQtbmV3LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogLjdyZW0gMnJlbTtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWJsdWU7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5cclxuLmFycm93LWljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgJl9fcm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1wcm9maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5cclxuLyogUmVzZXQgKi9cclxuaW5wdXQge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKiBDdXN0b20gY2hlY2tib3ggKioqKioqKiovXHJcblxyXG4uaW5wdXQtY2hlY2tib3gge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuXHJcbiAgJjpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgYm9yZGVyOiAuNHJlbSBzb2xpZCAkY29sb3Itd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIC4xcmVtICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAuMXJlbSAkdGVydGlhcnktY29sb3ItYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIC4xcmVtICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5cclxuLnNpZGUtbmF2aWdhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1cmVtO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1cmVtKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmVyeURhcmstZ3JleTtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fc2VwYXJhdG9yIHtcclxuICAgIG1hcmdpbjogMS41cmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IC4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1lZGl1bURhcmstZ3JleTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJl9faGlnaGxpZ2h0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1lZGl1bURhcmstZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aGZpbmRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1yZWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLS43cmVtO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAwJSB7LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsLjQpO31cclxuICAgICAgICAgIDcwJSB7LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LDEwMiwxMjEsMCk7fVxyXG4gICAgICAgICAgMTAwJSB7LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsMCk7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsLjQpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsLjQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNzAlIHtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsMTAyLDEyMSwwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwwKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaWdobGlnaHRlciB7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IC41cmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ncmVlbjtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fY29sbGFwc2libGUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAmX19zdWJ0aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgcGFkZGluZzogMCA0cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFya2VzdC1ncmV5O1xyXG5cclxuICAgICAgLmhpZ2hsaWdodGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgd2lkdGg6IC41cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBhdGhmaW5kZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX2hpZ2hsaWdodCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstZ3JleTtcclxuICAgICAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2libGUtdmlzaWJsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uY29sbGFwc2UtdHJpZ2dlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2LWljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5cclxuYXBwLW15LXByb2plY3RzLFxyXG5hcHAtYWN0aXZlLXByb2plY3RzLFxyXG5hcHAtY29tcGxldGVkLXByb2plY3RzLFxyXG5hcHAtaW5ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm1haW4tdmlldyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcclxuICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDE3cmVtO1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICZfX2hlYWRsaW5lIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9ucyB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./src/styles/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\school\Final-exam\bug-tracker\src\styles\styles.scss */"./src/styles/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map