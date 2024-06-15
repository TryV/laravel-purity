import{_ as s,c as n,o as a,b as t}from"./app-BPVbuVsp.js";const e={},p=t(`<h3 id="changing-params-source" tabindex="-1"><a class="header-anchor" href="#changing-params-source"><span>Changing Params Source</span></a></h3><p>By Default, Purity gets params from filters index in query params, overwrite this by passing params directly to filter or sort functions:</p><h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>Filter</span></a></h4><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token comment">// this will get filters from find query params</span></span>
<span class="line"><span class="token comment">// \`GET /api/users?find[name][$eq]=John\`</span></span>
<span class="line"><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;find&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;$eq&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;good post&#39;</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line"><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;$or&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;$eq&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;good post&#39;</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">&#39;author&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span> <span class="token string single-quoted-string">&#39;$eq&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;John Doe&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span> <span class="token string single-quoted-string">&#39;$gt&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>Sort</span></a></h4><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;id:desc&#39;</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function l(o,c){return a(),n("div",null,i)}const u=s(e,[["render",l],["__file","param.html.vue"]]),d=JSON.parse('{"path":"/advanced/param.html","title":"Params Source","lang":"en-US","frontmatter":{"title":"Params Source","prev":{"text":"Rename Fields","link":"/advanced/rename"},"next":{"text":"Allowed Fields","link":"/advanced/allowed"}},"headers":[{"level":3,"title":"Changing Params Source","slug":"changing-params-source","link":"#changing-params-source","children":[]}],"git":{"updatedTime":1718412827000,"contributors":[{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":3}]},"filePathRelative":"advanced/param.md"}');export{u as comp,d as data};
