import{_ as p,r as i,c,a as n,d as s,e,w as t,b as l,o}from"./app-BOpaj1i8.js";const r={},d=l(`<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2><h3 id="filters" tabindex="-1"><a class="header-anchor" href="#filters"><span>Filters</span></a></h3><p>Add <code>Filterable</code> trait to your model to get filters functionalities.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Abbasudo<span class="token punctuation">\\</span>Purity<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>Filterable</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Filterable</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now add <code>filter()</code> to your model eloquent query in the controller.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Post</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=n("a",{href:"#restrict-filters"},"restrict filters",-1),k=l(`<h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>Sort</span></a></h3><h4 id="sort-basics" tabindex="-1"><a class="header-anchor" href="#sort-basics"><span>Sort Basics</span></a></h4><p>Add <code>Sortable</code> trait to your model to get sorts functionalities.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Abbasudo<span class="token punctuation">\\</span>Purity<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>Sortable</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Sortable</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now add <code>sort()</code> to your eloquent query in the controller.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Post</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(v,b){const a=i("RouteLink");return o(),c("div",null,[d,n("p",null,[s("By default, it gives access to all filters available. here is the list of "),e(a,{to:"/js-examples/available-methods.html"},{default:t(()=>[s("available filters")]),_:1}),s(". if you want to explicitly specify which filters to use in this call head to "),u,s(" section.")]),k,n("p",null,[s("Now sort can be applied as instructed in "),e(a,{to:"/js-examples/sort.html"},{default:t(()=>[s("apply sort")]),_:1}),s(".")])])}const g=p(r,[["render",m],["__file","basic-usage.html.vue"]]),f=JSON.parse(`{"path":"/guide/basic-usage.html","title":"Basic Usage","lang":"en-US","frontmatter":{"title":"Basic Usage","description":"Learn how to use Purity's basic features.","prev":{"text":"Installation","link":"/guide/installation"},"next":{"text":"Available Methods","link":"/js-examples/available-methods"}},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"Filters","slug":"filters","link":"#filters","children":[]},{"level":3,"title":"Sort","slug":"sort","link":"#sort","children":[]}]}],"git":{"updatedTime":1718412827000,"contributors":[{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":3}]},"filePathRelative":"guide/basic-usage.md"}`);export{g as comp,f as data};