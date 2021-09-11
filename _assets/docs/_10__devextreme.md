# Devextreme  

Adding a new module to the library
```  
$ ng g m modules/devextreme/tagBox --routing  
```

Adding a new module index component to the library
```  
$ ng g component modules/devextreme/tagBox 
```

update app.module.ts 
```ts  

// ..

// MODULES  
import { TagBoxModule } from './modules/tag-box/tag-box.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ..
    TagBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }  
  
```


Update new module  
```ts  
// ...  
import { TagBoxComponent } from './tag-box.component';

@NgModule({
  // ..
  exports: [
    TagBoxComponent
  ]
})
export class TagBoxModule { }
```  

Update Routing
```ts  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS  
import { TagBoxComponent } from './tag-box.component';

const routes: Routes = [{
  path: 'tag-box',  component: TagBoxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagBoxRoutingModule { }
```

update the app HTML  
```html  
<li>
    <div>
        <a routerLinkActive="active" routerLink=/tag-box"">TagBox</a> | 
        <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTagBox/" target="_blank">API Reference</a>
    </div>
</li>
```  