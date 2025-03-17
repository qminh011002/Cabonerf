```
├── .editorconfig
├── .gitignore
├── .prettierrc
├── Dockerfile
├── README.md
├── Screenshot 2024-11-28 at 17.02.50.png
├── components.json
├── eslint.config.js
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
    └── vite.svg
├── src
    ├── @types
    │   ├── authentication.type.ts
    │   ├── cabonerfEdge.type.ts
    │   ├── cabonerfNode.type.ts
    │   ├── common.type.ts
    │   ├── connector.type.ts
    │   ├── dispatch.type.ts
    │   ├── emissionCompartment.type.ts
    │   ├── emissionSubstance.type.ts
    │   ├── exchange.type.ts
    │   ├── impactCategory.type.ts
    │   ├── impactMethod.type.ts
    │   ├── impactProcess.type.ts
    │   ├── lifeCycleStage.type.ts
    │   ├── objectLibrary.type.ts
    │   ├── organization.type.ts
    │   ├── process.type.ts
    │   ├── project.type.ts
    │   ├── systemBoundary.type.ts
    │   ├── unit.type.ts
    │   ├── user.type.ts
    │   └── workspace.type.ts
    ├── App.css
    ├── App.tsx
    ├── apis
    │   ├── authentication.apis.ts
    │   ├── connector.apis.ts
    │   ├── emisisonCompartment.apis.ts
    │   ├── exchange.apis.ts
    │   ├── impactCategories.apis.ts
    │   ├── impactMethod.apis.ts
    │   ├── industryCode.apis.ts
    │   ├── lifeCycleStages.apis.ts
    │   ├── objectLibrary.apis.ts
    │   ├── organiza.apis.ts
    │   ├── process.apis.ts
    │   ├── project.apis.ts
    │   ├── substance.api.ts
    │   ├── systemBoundary.apis.ts
    │   ├── unit.apis.ts
    │   └── workspace.apis.ts
    ├── assets
    │   ├── fonts
    │   │   ├── Sohne-Buch.otf
    │   │   ├── Sohne-BuchKursiv.otf
    │   │   ├── Sohne-Dreiviertelfett.otf
    │   │   ├── Sohne-DreiviertelfettKursiv.otf
    │   │   ├── Sohne-Extrafett.otf
    │   │   ├── Sohne-ExtrafettKursiv.otf
    │   │   ├── Sohne-Extraleicht.otf
    │   │   ├── Sohne-ExtraleichtKursiv.otf
    │   │   ├── Sohne-Fett.otf
    │   │   ├── Sohne-FettKursiv.otf
    │   │   ├── Sohne-Halbfett.otf
    │   │   ├── Sohne-HalbfettKursiv.otf
    │   │   ├── Sohne-Kraftig.otf
    │   │   ├── Sohne-KraftigKursiv.otf
    │   │   ├── Sohne-Leicht.otf
    │   │   └── Sohne-LeichtKursiv.otf
    │   ├── images
    │   │   └── tutorial.png
    │   └── logos
    │   │   ├── 1024.png
    │   │   ├── logo.png
    │   │   ├── long-logo.png
    │   │   ├── rounded-logo.png
    │   │   ├── short-logo.png
    │   │   └── trans-logo.png
    ├── common
    │   └── icons
    │   │   ├── CompareResult.tsx
    │   │   ├── ContributeLifeStage.tsx
    │   │   ├── ContributeResult.tsx
    │   │   ├── ContributionLifeStage.tsx
    │   │   ├── DashboardIcon.tsx
    │   │   ├── DocumentIcon.tsx
    │   │   ├── ExcelIcon.tsx
    │   │   ├── FavoriteIcon.tsx
    │   │   ├── GmailIcon.tsx
    │   │   ├── GoogleIcon.tsx
    │   │   ├── ImpactResult.tsx
    │   │   ├── Information.tsx
    │   │   ├── Intensity.tsx
    │   │   ├── OutLookIcon.tsx
    │   │   └── OverviewIcon.tsx
    ├── components
    │   ├── BreadcrumbMenu.tsx
    │   ├── ButtonSubmitForm.tsx
    │   ├── ChemicalFormula.tsx
    │   ├── ControlItem.tsx
    │   ├── Cursor.tsx
    │   ├── CustomSooner.tsx
    │   ├── ErrorSooner.tsx
    │   ├── ImpactCategoriesComboBox.tsx
    │   ├── ImpactMethodComboBox.tsx
    │   ├── MyAvatar.tsx
    │   ├── PreviewProject.tsx
    │   ├── RedirectToDefaultOrganization.tsx
    │   ├── ScrollableList.tsx
    │   ├── Sidebar.tsx
    │   ├── SidebarItem.tsx
    │   ├── SuccessSooner.tsx
    │   ├── TheadTable.tsx
    │   ├── ToggleTheme.tsx
    │   ├── TooltipWrapper.tsx
    │   ├── WarningSooner.tsx
    │   ├── data-table.tsx
    │   ├── devtools.tsx
    │   └── ui
    │   │   ├── accordion.tsx
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx
    │   │   ├── breadcrumb.tsx
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── chart.tsx
    │   │   ├── checkbox.tsx
    │   │   ├── collapsible.tsx
    │   │   ├── command.tsx
    │   │   ├── context-menu.tsx
    │   │   ├── dialog.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── form.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── popover.tsx
    │   │   ├── scroll-area.tsx
    │   │   ├── separator.tsx
    │   │   ├── sheet.tsx
    │   │   ├── skeleton.tsx
    │   │   ├── sonner.tsx
    │   │   ├── table.tsx
    │   │   ├── tabs.tsx
    │   │   ├── textarea.tsx
    │   │   ├── toggle-group.tsx
    │   │   ├── toggle.tsx
    │   │   └── tooltip.tsx
    ├── config.ts
    ├── constants
    │   ├── api.endpoint.ts
    │   ├── tab.titles.ts
    │   ├── time.ts
    │   └── validation.msg.ts
    ├── contexts
    │   ├── app.context.tsx
    │   ├── sidebar.context.tsx
    │   └── theme.context.tsx
    ├── hooks
    │   ├── useCursorStateSynced.ts
    │   ├── useDebounce.ts
    │   ├── useDeleteHandle.ts
    │   ├── useEdgesStateSynced.ts
    │   ├── useNodesStateSynced.ts
    │   ├── useQueryParams.tsx
    │   ├── useRouteElements.tsx
    │   ├── useSocket.ts
    │   ├── useTheme.tsx
    │   ├── useUpdateCacheData.ts
    │   ├── useYDoc.ts
    │   └── useYjsdoc.ts
    ├── index.css
    ├── layouts
    │   ├── AuthenticationLayout
    │   │   ├── AuthenticationLayout.tsx
    │   │   ├── components
    │   │   │   ├── AuthenticationFooter
    │   │   │   │   ├── AuthenticationFooter.tsx
    │   │   │   │   └── index.ts
    │   │   │   └── AuthenticationHeader
    │   │   │   │   ├── AuthenticationHeader.tsx
    │   │   │   │   └── index.ts
    │   │   └── index.ts
    │   ├── CommonLayout
    │   │   ├── CommonLayout.tsx
    │   │   ├── components
    │   │   │   ├── MainHeader
    │   │   │   │   ├── MainHeader.tsx
    │   │   │   │   └── index.ts
    │   │   │   └── ProfileDropdown
    │   │   │   │   ├── ProfileDropdown.tsx
    │   │   │   │   └── index.ts
    │   │   └── index.ts
    │   └── DashboardLayout
    │   │   ├── DashboardLayout.tsx
    │   │   └── index.ts
    ├── lib
    │   └── utils.ts
    ├── main.tsx
    ├── pages
    │   ├── Dashboard
    │   │   ├── DashboardPage.tsx
    │   │   ├── components
    │   │   │   ├── CompareProcess
    │   │   │   │   ├── CompareProcess.tsx
    │   │   │   │   └── OwnSkeleton.tsx
    │   │   │   ├── DashboardHeader
    │   │   │   │   ├── DashboardHeader.tsx
    │   │   │   │   └── index.ts
    │   │   │   ├── DashboardProductItem.tsx
    │   │   │   ├── DashboardProject.tsx
    │   │   │   ├── FilterProject
    │   │   │   │   ├── FilterProject.tsx
    │   │   │   │   └── index.ts
    │   │   │   ├── FloatingControl.tsx
    │   │   │   ├── Project
    │   │   │   │   ├── columns.tsx
    │   │   │   │   ├── item-project.tsx
    │   │   │   │   └── table-project.tsx
    │   │   │   └── SkeletonCard.tsx
    │   │   └── index.ts
    │   ├── Login
    │   │   ├── LoginPage.tsx
    │   │   └── index.ts
    │   ├── ObjectLibraries
    │   │   ├── ObjectLibrariesPage.tsx
    │   │   └── components
    │   │   │   └── ObjectLibrariesHeader.tsx
    │   ├── Organization
    │   │   ├── OrganizationPage.tsx
    │   │   └── components
    │   │   │   └── OrganizationHeader.tsx
    │   ├── Playground
    │   │   ├── Playground.tsx
    │   │   ├── components
    │   │   │   ├── BackButton.tsx
    │   │   │   ├── ComponentProcess.tsx
    │   │   │   ├── ConnectionLine.tsx
    │   │   │   ├── ContextMenuProcess.tsx
    │   │   │   ├── ControlItem.tsx
    │   │   │   ├── ExchangeItem.tsx
    │   │   │   ├── HandleProductItem.tsx
    │   │   │   ├── LoadingProject.tsx
    │   │   │   ├── MenuExport.tsx
    │   │   │   ├── PlaygroundActionToolbar.tsx
    │   │   │   ├── PlaygroundControl
    │   │   │   │   ├── ContributionBreakdownView.tsx
    │   │   │   │   ├── ContributionLifeStageView.tsx
    │   │   │   │   ├── ImpactAssessmentView.tsx
    │   │   │   │   ├── PlaygroundControlMenu.tsx
    │   │   │   │   └── PlaygroundControlTrigger.tsx
    │   │   │   ├── PlaygroundControls.tsx
    │   │   │   ├── PlaygroundHeader.tsx
    │   │   │   ├── PlaygroundProjectOption.tsx
    │   │   │   ├── PlaygroundToolBoxV2
    │   │   │   │   ├── PlaygroundToolBoxV2.tsx
    │   │   │   │   ├── components
    │   │   │   │   │   ├── ToolboxLifeCycleStages.tsx
    │   │   │   │   │   ├── ToolboxMenu.tsx
    │   │   │   │   │   └── ToolboxTrigger.tsx
    │   │   │   │   ├── context
    │   │   │   │   │   └── toolbox.context.tsx
    │   │   │   │   └── index.ts
    │   │   │   ├── PlaygroundToolbox.tsx
    │   │   │   ├── ProductItem.tsx
    │   │   │   ├── SheetbarSearch.tsx
    │   │   │   ├── SheetbarSearchObjectLibrary.tsx
    │   │   │   └── SheetbarSide.tsx
    │   │   ├── contexts
    │   │   │   ├── contextmenu.context.tsx
    │   │   │   ├── playground-control.context.tsx
    │   │   │   ├── playground.context.tsx
    │   │   │   └── sheetbar.context.tsx
    │   │   ├── edges
    │   │   │   └── ProcessEdge.tsx
    │   │   ├── index.ts
    │   │   ├── nodes
    │   │   │   ├── ProcessNode.tsx
    │   │   │   └── TextNode.tsx
    │   │   ├── reducer
    │   │   │   ├── queryParam.reducer.ts
    │   │   │   └── searchObjectQueryParam.reducer.ts
    │   │   └── yjsdoc
    │   │   │   ├── ydoc-cache.ts
    │   │   │   └── ydoc.ts
    │   ├── Profile
    │   │   ├── ProfilePage.tsx
    │   │   ├── components
    │   │   │   ├── InputFile.tsx
    │   │   │   └── ProfileHeader.tsx
    │   │   └── index.ts
    │   ├── Register
    │   │   ├── RegisterPage.tsx
    │   │   └── index.ts
    │   └── VerifyEmail
    │   │   ├── VerifyEmailPage.tsx
    │   │   └── index.ts
    ├── queryClient.ts
    ├── routes
    │   ├── ProtectedRoute.tsx
    │   └── RejectedRoute.tsx
    ├── schemas
    │   └── validation
    │   │   ├── handleProductItem.schema.ts
    │   │   ├── login.schema.ts
    │   │   ├── nodeProcess.schema.ts
    │   │   ├── process.schema.ts
    │   │   ├── project.schema.ts
    │   │   ├── register.schema.ts
    │   │   └── userUpdate.schema.ts
    ├── services
    │   ├── http.tsx
    │   └── socket.io.ts
    ├── socket.io.ts
    ├── socket.ts
    ├── swapy
    │   ├── animation.ts
    │   ├── borderRadius.ts
    │   ├── draggable.ts
    │   ├── easings.ts
    │   ├── flip.ts
    │   ├── index.ts
    │   ├── math.ts
    │   ├── rect.ts
    │   ├── ultils.ts
    │   ├── vector.ts
    │   └── view.ts
    ├── utils
    │   ├── color.ts
    │   ├── data.ts
    │   ├── error.ts
    │   ├── local_storage.ts
    │   ├── mockdata.ts
    │   └── utils.ts
    └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.app.tsbuildinfo
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
└── vite.config.ts

```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
	// Set the react version
	settings: { react: { version: '18.3' } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
});
```
