import{_ as s,r as a,c as o,a as e,d as t,e as n,w as r,o as l}from"./app-DTVgM2yK.js";const d={},c=e("h2",{id:"upgrade-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrade-guide"},[e("span",null,"Upgrade Guide")])],-1),u=e("h3",{id:"version-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#version-3"},[e("span",null,"Version 3")])],-1),h=e("code",null,"$filterFields",-1),f=e("a",{href:"#restrict-filters"},"Restrict filters",-1),m=e("code",null,"sortFields",-1),p=e("h3",{id:"version-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#version-2"},[e("span",null,"Version 2")])],-1),_=e("a",{href:"#custom-filters"},"Custom Filters",-1);function g(v,k){const i=a("RouteLink");return l(),o("div",null,[c,u,e("p",null,[t("changed how "),h,t(" array works. it no longer renames fields, instead, it restricts filters that are accepted by the field as mentioned in the "),f,t(" section. to rename fields refer to "),n(i,{to:"/advanced/rename.html"},{default:r(()=>[t("Rename fields")]),_:1}),t(". "),m,t(" However, didnt change.")]),p,e("p",null,[t("changed filter function arguments. filter function no longer accepts filter methods, instead, filter function now accepts filter source as mentioned in "),_,t(" section. to specify allowed filter methods use filterBy as mentioned in "),n(i,{to:"/advanced/filter/restrict.html"},{default:r(()=>[t("Restrict Filters")]),_:1})])])}const b=s(d,[["render",g],["__file","upgrade.html.vue"]]),w=JSON.parse('{"path":"/advanced/upgrade.html","title":"Upgrade Guide","lang":"en-US","frontmatter":{"title":"Upgrade Guide","prev":{"text":"Null sort","link":"/advanced/sort/null-sort"}},"headers":[{"level":2,"title":"Upgrade Guide","slug":"upgrade-guide","link":"#upgrade-guide","children":[{"level":3,"title":"Version 3","slug":"version-3","link":"#version-3","children":[]},{"level":3,"title":"Version 2","slug":"version-2","link":"#version-2","children":[]}]}],"git":{"updatedTime":1718394722000,"contributors":[{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":2}]},"filePathRelative":"advanced/upgrade.md"}');export{b as comp,w as data};