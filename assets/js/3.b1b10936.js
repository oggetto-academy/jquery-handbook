(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(t,e,a){t.exports=a.p+"assets/img/ajax_scheme.aef4ceed.png"},153:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"_10-talk-to-the-server-with-ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-talk-to-the-server-with-ajax","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. Talk to the server with Ajax")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A brief overview of Ajax")]),e("li",[this._v("Loading preformatted HTML from the server   Making GET and POST requests")]),e("li",[this._v("Exerting fine-grained control over requests")]),e("li",[this._v("Setting default Ajax properties")]),e("li",[this._v("Handling Ajax events")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-1-brushing-up-on-ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-brushing-up-on-ajax","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.1 Brushing up on Ajax")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Аяксовый запрос использует конструктор "),e("code",[this._v("XMLHttpRequest")]),this._v(" (XHR) или Microsoft XMLHTTP ActiveX control под капотом. Такие запросы позволяют отправлять и получать информацию с сервера без перезагрузки страницы.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:a(147),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Specify the HTTP method (such as POST or GET).")]),e("li",[this._v("Provide the URL of the server-side resource to be contacted.")]),e("li",[this._v("Let the XHR instance know how it can inform you of its progress.")]),e("li",[this._v("Provide any body content for requests such as POST.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Специфического кода для старых браузеров")]),e("li",[this._v("Нужно отсеивать стейты запроса")]),e("li",[this._v("Нужно обрабатывать ответ в соответствии с его MIME-типом")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-2-loading-content-into-elements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-loading-content-into-elements","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.2 Loading content into elements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-2-1-loading-content-with-jquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-loading-content-with-jquery","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.2.1 Loading content with jQuery")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#elem'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'some-resource'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("load")]),this._v(" вернет коллекцию, можно чейнить (сработает сразу, не будет дожидаться ответа, см. "),e("code",[this._v("load_chaining.html")]),this._v(").")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("load(url[, data][, callback])")]),t._v(" — если "),a("code",[t._v("data")]),t._v(" задана объектом, то пошлется POST. Если на задать, будет GET. Если надо задать параметры и послать GET, нужно его декодировать в строку (использовать "),a("code",[t._v("$.param")]),t._v(" или "),a("code",[t._v("encodeURIComponent()")]),t._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("В колбэк приходит 3 параметр: "),e("code",[this._v("responseText, status, jqXHR")]),this._v(". "),e("code",[this._v("jqXHR")]),this._v(" — расширенный объект XHR (jQuery добавляет свои методы и свойства). Например, можно взять контент-тайп: "),e("code",[this._v("jqXHR.getResponseHeader('Content-Type')")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Можно даже делать так: "),e("code",[this._v(".load('data.html p:last-of-type', loadCb)")]),this._v(". Вставится только последний из абзацев.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"сериаnизация-десериаnизация-форм"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#сериаnизация-десериаnизация-форм","aria-hidden":"true"}},[this._v("#")]),this._v(" Сериализация/десериализация форм")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-2-2-loading-dynamic-html-fragments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2-loading-dynamic-html-fragments","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.2.2 Loading dynamic HTML fragments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-3-making-get-and-post-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-making-get-and-post-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3 Making GET and POST requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("POST")]),this._v(" — когда что-то нужно изменить: удалить, записать, отредактировать. Не идемпотентная операция.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-3-1-getting-data-with-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-1-getting-data-with-get","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3.1 Getting data with GET")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("$.get(url[, data][, callback][, dataType])")]),t._v(" — пошлет гет-запрос при "),a("code",[t._v("data")]),t._v(" в любом виде (в отличие от "),a("code",[t._v("load")]),t._v(", который посылает POST, если отдать массив/объект). "),a("code",[t._v("dataType")]),t._v(" говорит, как нужно интерпретировать ответ: html, text, xml, json, script или jsonp. Вернет "),a("code",[t._v("jqXHR")]),t._v(" инстанс.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("В jQuery 3.x добавилась новая сигнатура: "),e("code",[this._v("$.get([options])")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-3-2-getting-json-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-2-getting-json-data","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3.2 Getting JSON data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("$.getJSON()")]),this._v(" — для случаев, когда известно, что придет JSON. Сама распарсит и сделает его JS-данными в колбэке.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Как если бы послали "),e("code",[this._v("$.get()")]),this._v(" с "),e("code",[this._v("dataType")]),e("code",[this._v("json")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-3-3-dynamically-loading-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-3-dynamically-loading-script","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3.3 Dynamically loading script")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("$.getScript()")]),this._v(" — когда нужно динамически подгрузить скрипт и вставить его на страницу. Тут URL не обязательно должен быть с того же домена. Под капотом так:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("getScript"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"script"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// без `data`, `dataType` указан как `script`")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-3-4-making-post-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-4-making-post-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3.4 Making POST requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Нужно изменить данные, а не просто получить")]),e("li",[this._v("Нужно отправить много байтов (картинку)")]),e("li",[this._v("Сервер реагирует по-разному на GET и POST")]),e("li",[this._v("...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("$.post()")]),this._v(" — как гет, только передает данные постом.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-3-5-implementing-cascading-dropdowns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-5-implementing-cascading-dropdowns","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.3.5 Implementing cascading dropdowns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Есть 3 селекта. На изменение каждого нужно выполнять какое-то действие. Как это лучше сделать? Можно использовать то, что событие всплывает и навесить "),e("code",[this._v("change")]),this._v(" на элемент, в котором эти 3 селекта находятся. Будет всплытие и там все сделается. См. страницу 287 в книге.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Пример. На изменение нужно "),e("code",[this._v('<option value="">-choodse smth-</option>')]),this._v(" — пустое "),e("code",[this._v("value")]),this._v(" с текстом заглушкой. Вешаем обработчик на родительский див:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#selections-pane'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("change")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'[value=\"\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("remove")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// среди всех дочерних селектов найти пустые опшены")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-4-taking-full-control-of-an-ajax-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-taking-full-control-of-an-ajax-request","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.4 Taking full control of an Ajax request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Когда может быть плезен "),e("code",[this._v("$.ajax")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Сказать серверу, что не нужно отдавать из кэша браузера")]),e("li",[this._v("Можно послать запрос и ждать ответ только определенное время")]),e("li",[this._v("Если получили ответ в одном формате (текст, например), но хотим с ним работать как с html или xml.")]),e("li",[this._v("...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-4-1-making-ajax-requests-with-all-the-trimmings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-1-making-ajax-requests-with-all-the-trimmings","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.4.1 Making Ajax requests with all the trimmings")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("$.ajax(url[, options])")]),t._v(", "),a("code",[t._v("$.ajax([options])")]),t._v(" — "),a("code",[t._v("url")]),t._v(" можно указывать отдельно, а можно прямо в опциях. Возвращает "),a("code",[t._v("jqXHR")]),t._v("-объект.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("dataType")]),this._v(" — тип данных, которые мы ожидаем получить. Определяет, надо ли как-то обработать полученные данные перед передачей в колбэк.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("context")]),this._v(" — задать "),e("code",[this._v("this")]),this._v(" для функции-обработчика. По-умолчанию — объект опций.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-4-2-setting-request-defaults"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-2-setting-request-defaults","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.4.2 Setting request defaults")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("$.ajaxSetup()")]),t._v(" — установить опции всех аяксовых запросов из jQuery по умолчанию. Не для установки обработчиков для done, error, always. Не действует на "),a("code",[t._v(".load()")]),t._v(", не переопределяет методы для "),a("code",[t._v("$.get")]),t._v(" и "),a("code",[t._v("$.post")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-4-3-handling-ajax-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-3-handling-ajax-events","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.4.3 Handling Ajax events")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._v("Локальные: "),a("code",[t._v("beforeSend")]),t._v(", "),a("code",[t._v("done")]),t._v(", "),a("code",[t._v("fail")]),t._v(", "),a("code",[t._v("alway")]),t._v(" — обрабатываются колбэками. Это колбэки в конкретных вызовах "),a("code",[t._v("$.ajax")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Глобальные события вешаются на "),e("code",[this._v("document")]),this._v(", как обычные события: "),e("code",[this._v("$(document).on('ajaxStart)")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Помимо навешивания обработчиков на события "),e("code",[this._v("document")]),this._v(", есть интерфейс через функции:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ajaxComplete(callback)\najaxError(callback)\najaxSend(callback)\najaxStart(callback)\najaxStop(callback)\najaxSuccess(callback)\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("jQuery отслеживает количество активных запросов ("),a("code",[t._v("jQuery.active")]),t._v("). Так, если запустить пачку аяксов, то "),a("code",[t._v("ajaxStart")]),t._v(" и "),a("code",[t._v("ajaxStop")]),t._v(" не сработают для каждого, а будут до и после передачи данных. См. пример в "),a("code",[t._v("book-repo/chapter-10/ajax.events.html")]),t._v(" и код jQuery 3.0 в строках "),a("code",[t._v("9027")]),t._v(" и "),a("code",[t._v("9262")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-4-4-advanced-ajax-utility-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-4-advanced-ajax-utility-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.4.4 Advanced Ajax utility functions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("$.ajaxPrefilter([dataTypes,] callback)")]),this._v(" — позволяет обработать аяксовые опции перед отправкой. Можно зарубить запрос, можно перенаправить, изменить дата "),e("code",[this._v("dataType")]),this._v(". См. пример в "),e("code",[this._v("book-repo/chapter-10/$.ajaxPrefilter.html")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("$.ajaxTransport([dataType,] callback)")]),t._v(" — позволяет изменить внутреннюю кухню "),a("code",[t._v("$.ajax")]),t._v(". Должен вернуть объект с методами "),a("code",[t._v("send")]),t._v(" и "),a("code",[t._v("abort")]),t._v(" (внутренний транспортный объект jQuery). Каждый запрос имеет свой собственный транспортный объект, поэтому напрямую мы его вернуть не можем, можем только подменить методы. Использовать нужно в случае крайней необходимости.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"вопросы-и-задания"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#вопросы-и-задания","aria-hidden":"true"}},[this._v("#")]),this._v(" Вопросы и задания")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"прочитать-и-попробовать"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#прочитать-и-попробовать","aria-hidden":"true"}},[this._v("#")]),this._v(" Прочитать и попробовать")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"задача"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#задача","aria-hidden":"true"}},[this._v("#")]),this._v(" Задача")])}],n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Синтаксис")]),a("p",[t._v("В коде проектов используйте полный синтаксис "),a("a",{attrs:{href:"https://learn.jquery.com/ajax/jquery-ajax-methods/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("$.ajax")]),a("OutboundLink")],1),t._v(" вместо сокращений "),a("code",[t._v("$.get()")]),t._v(", "),a("code",[t._v("$.post()")]),t._v(" и "),a("code",[t._v(".load()")]),t._v(" пр. Во-первых, код будет однообразный, во-вторых удобно изменять/добавлять свойства и методы и в третьих, практически всегда сокращений не достаточно для определения всех параметров запроса.")])]),a("p",[t._v("Термин Ajax (for Asynchronous JavaScript and XML) предложил Jesse James Garrett из Adaptive Path в 2005-м году.")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("Спецификация XHR: https://xhr.spec.whatwg.org")]),a("p",[t._v("Перед тем, как послать запрос, нужно сделать вот что:")]),t._m(5),a("p",[t._v("Хоть в Ajax буква 'X' значит XML, ответ может быть в любом формате: текст, HTML, JSON, XML, ...")]),a("p",[t._v("Нативный аякс требует:")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("Загрузить кусок HTML с сервера в див можно методом "),a("a",{attrs:{href:"http://api.jquery.com/load/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("load")]),a("OutboundLink")],1),t._v(":")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("p",[a("a",{attrs:{href:"https://api.jquery.com/serialize/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("$('#selector').serialize()")]),a("OutboundLink")],1),t._v(" — формирует строку запроса из jQuery-коллекции. Метод сам находит элементы форм в коллекции и выбирает только те элементы, которые по "),a("a",{attrs:{href:"https://www.w3.org/TR/html401/interact/forms.html#h-17.13.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("спецификации"),a("OutboundLink")],1),t._v(" считаются пригодными для сабмита (пустые селекты, невыделенные кнопки и радиобаттоны, элементы без имени игнорируются).")]),a("p",[t._v("Есть и обратный процесс — десериализация. Ее jQuery из коробки не делает, но есть "),a("a",{attrs:{href:"https://github.com/kflorence/jquery-deserialize",target:"_blank",rel:"noopener noreferrer"}},[t._v("хороший плагин"),a("OutboundLink")],1),t._v(". Десериализация может быть полезна, когда мы заходим по урлу и надо взять оттуда гет-параметры и вставить их в форму. Например, в форму поиска.")]),a("p",[a("a",{attrs:{href:"https://api.jquery.com/serializeArray/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("serializeArray()")]),a("OutboundLink")],1),t._v(" вместо строки запроса вернет сериализованные данные в виде массива объектов "),a("code",[t._v("[{name:value}, ...]")]),t._v(".")]),t._m(15),a("p",[a("a",{attrs:{href:"https://github.com/AurelioDeRosa/jquery-in-action/blob/master/chapter-10/phase.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Пример "),a("code",[t._v("chapter-10/phase.1.html")]),a("OutboundLink")],1),t._v(" с загрузкой куска HTML в репозитории книги.")]),t._m(16),a("p",[t._v("В основном используются GET и POST запросы:")]),a("ul",[a("li",[a("code",[t._v("GET")]),t._v(" — когда операция ничего не меняет. Каждый раз придет одно и то же, "),a("a",{attrs:{href:"http://www.restapitutorial.ru/lessons/idempotency.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("идемпотентность"),a("OutboundLink")],1),t._v(". Браузеры кешируют гет-запросы.")]),t._m(17)]),t._m(18),t._m(19),a("p",[t._v("Никуда ничего не вставит, нужно самим вставлять ответ в DOM в колбэке, если нужно.")]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("Скрипт загружается, исполняется и переменные/функции становятся доступны.")]),t._m(27),a("p",[t._v("Когда POST:")]),t._m(28),t._m(29),t._m(30),a("p",[t._v("Интересно про отлавливание события на родительском элементе при всплытии.")]),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),a("p",[a("a",{attrs:{href:"http://api.jquery.com/jQuery.ajax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Полный список опций"),a("OutboundLink")],1),t._v(". Страница 290 в книге.")]),t._m(41),t._m(42),a("p",[t._v("Свойства по умолчанию можно переопределять в конкретных вызовах.")]),t._m(43),a("p",[t._v("Есть ряд кастомных событий, с помощью которых можно обрабатывать аяксовые запросы.")]),a("ul",[t._m(44),a("li",[a("a",{attrs:{href:"https://api.jquery.com/category/ajax/global-ajax-event-handlers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Глобальные"),a("OutboundLink")],1),t._v(": события для всех аяксовых запросов: "),a("code",[t._v("ajaxStart")]),t._v(", "),a("code",[t._v("ajaxSend")]),t._v(", "),a("code",[t._v("ajaxSuccess")]),t._v(", "),a("code",[t._v("ajaxError")]),t._v(", "),a("code",[t._v("ajaxStop")]),t._v(" и "),a("code",[t._v("ajaxComplete")]),t._v(". Это кастомные события, которые триггерятся на "),a("code",[t._v("document")]),t._v(" и на них можно подписаться и обработать.")])]),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),a("p",[t._v("Продвинутые методы, редко понадобятся, но они есть.")]),t._m(50),t._m(51),t._m(52),t._m(53),a("ul",[a("li",[a("a",{attrs:{href:"https://learn.javascript.ru/ajax-jsonp",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSONP"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Same origin policy"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://medium.com/statuscode/cors-a-guided-tour-4e72230a8739",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://learn.javascript.ru/fetch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("fetch")]),a("OutboundLink")],1),t._v(".")])]),t._m(54),a("p",[t._v("Реализовать "),a("a",{attrs:{href:"https://github.com/amiskov/homeworks/tree/master/city-selector",target:"_blank",rel:"noopener noreferrer"}},[t._v("компонент с выбором региона и города"),a("OutboundLink")],1),t._v(".")])])},s,!1,null,null,null);e.default=r.exports}}]);