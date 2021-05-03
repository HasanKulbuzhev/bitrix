{"version":3,"sources":["text.js"],"names":["BX","namespace","escapeText","Landing","Utils","headerTagMatcher","Matchers","headerTag","changeTagName","textToPlaceholders","Block","Node","Text","options","apply","this","arguments","type","onClick","bind","onPaste","onDrop","onInput","onMousedown","onMouseup","node","addEventListener","document","currentNode","prototype","__proto__","superClass","constructor","onAllowInlineEdit","setAttribute","Loc","getMessage","onChange","preventAdjustPosition","preventHistory","call","UI","Panel","EditorPanel","getInstance","adjustPosition","History","push","Entry","block","getBlock","id","selector","command","undo","lastValue","redo","getValue","event","clearTimeout","inputTimeout","key","keyCode","which","top","window","navigator","userAgent","match","ctrlKey","metaKey","setTimeout","onEscapePress","isEditable","hide","disableEdit","preventDefault","text","clipboardData","getData","execCommand","escapeHtml","onDocumentClick","fromNode","manifest","group","allowInlineEdit","Main","isControlsEnabled","stopPropagation","enableEdit","Tool","ColorPicker","hideAll","Button","FontAction","requestAnimationFrame","target","nodeName","parentElement","range","createRange","selectNode","getSelection","removeAllRanges","addRange","isContentEditable","StylePanel","isShown","buttons","getDesignButton","isHeader","getChangeTagButton","changeHandler","onChangeTag","textOnly","show","contentEditable","designButton","Design","html","attrs","title","onDesignShow","code","isAllowInlineEdit","getField","field","Field","name","content","innerHTML","changeTagButton","setValue","value","preventSave","isSavePrevented","test","ChangeTag","toLowerCase","insertAfter","activateItem","data","changeOptionsHandler"],"mappings":"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","file":"text.map.js"}