# admin-menu
Inject elasticms admin menu in the Skeleton


## Include CSS

``
$admin-menu-icon-fill: 'ping';
$admin-menu-icon-size: 16;
$admin-menu-font-color: #000000;
@import "~@elasticms/admin-menu/css/style";
``
## Include JS

```
import adminMenu from './js/admin-menu';
adminMenu('esm_demo_admin', '<i class="ems-icon"></i> Back to admin', 'btn btn-sm emsch');
```

Parameters:
  - Link's target attribute:
    - null: in the same tabe
    - '_blank': in a new tab (default value)
    - 'ems_project_x: in a named tab
  - Link's inner HTML
  - Class CSS to apply to the admin menu


## Release

 * Safety Checks
   * `git pull`
   * `git status`
   * `npm ci`
   * `npm audit fix --force`
 * Create version
   * Update version in package.json
   * `npm update`
   * Release ii on GitHub
 