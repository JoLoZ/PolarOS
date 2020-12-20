/*
 *  jquery.gridstrap - v{{ include-version }}
 *  gridstrap.js
 *  Use https://www.npmjs.com/package/jquery.gridstrap for version information, semantically-released.
 *  https://rosspi.github.io/gridstrap.js/
 *
 *  Made by Ross P
 *  Under MIT License
 */

!function s(r,o,a){function u(t,e){if(!o[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}var i=o[t]={exports:{}};r[t][0].call(i.exports,function(e){return u(r[t][1][e]||e)},i,i.exports,s,r,o,a)}return o[t].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={DATA_GRIDSTRAP:"gridstrap",DATA_HIDDEN_CELL:"gridstrap-hidden-cell",DATA_VISIBLE_CELL:"gridstrap-visible-cell",DATA_MOUSEDOWN_POSITION_DIFF:"gridstrap-mousedown-position-diff",DATA_MOUSEDOWN_SIZE:"gridstrap-mousedown-size",DATA_CELL_POSITION_AND_SIZE:"gridstrap-position-size",EVENT_DRAGSTART:"dragstart",EVENT_MOUSEDOWN:"mousedown",EVENT_MOUSEOVER:"mouseover",EVENT_MOUSEMOVE:"mousemove",EVENT_MOUSEUP:"mouseup",EVENT_TOUCHSTART:"touchstart",EVENT_TOUCHMOVE:"touchmove",EVENT_TOUCHEND:"touchend",EVENT_RESIZE:"resize",EVENT_CELL_RESIZE:"cellresize",EVENT_CELL_DRAG:"celldrag",EVENT_CELL_REDRAW:"cellredraw",ERROR_MISSING_JQUERY:"Requires jQuery v3.4.1",ERROR_INVALID_ATTACH_ELEMENT:"Cannot attach element that is not a child of gridstrap parent.",ERROR_NONCONTIGUOUS_HTML_UNDEFINED:"nonContiguousCellHtml option cannot be null."}},{}],2:[function(e,t,n){"use strict";var l,f,p,g,v=(l=e("./constants"))&&l.__esModule?l:{default:l},E=(e("./utils"),e("./handlers")),A=e("./setup"),D=e("./internal"),O=e("./methods");f=jQuery,p=window,g=document,f.Gridstrap=function(e,t){if("undefined"==typeof jQuery||!jQuery.Event||!jQuery.Event.prototype.hasOwnProperty("changedTouches"))throw new Error(v.default.ERROR_MISSING_JQUERY);var n=this;if(n.$el=f(e),n.el=e,n.constants=v.default,n.options=f.extend({},f.Gridstrap.defaultOptions,t),n.$el.data(v.default.DATA_GRIDSTRAP))n.options.debug&&console.log("Gridstrap already initialised for element: ".concat(n.el.nodeName));else{n.$el.data(v.default.DATA_GRIDSTRAP,n);var l=new A.Setup(f,p,g,n.$el,n),i=new D.Internal(l),s=new E.Handlers(l,i),r=new O.Methods(l,i,s),o=!0,a=!1,u=void 0;try{for(var d,c=Object.getOwnPropertyNames(Object.getPrototypeOf(r))[Symbol.iterator]();!(o=(d=c.next()).done);o=!0){var C=d.value,h=r[C];h instanceof Function&&h!==O.Methods&&(n[C]=h.bind(r))}}catch(e){a=!0,u=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw u}}i.InitOriginalCells(),i.InitEventHandlers(s),n.options.debug&&console.log("Gridstrap initialised for element: ".concat(n.el.nodeName))}},f.Gridstrap.defaultOptions={gridCellSelector:">*",hiddenCellClass:"gridstrap-cell-hidden",visibleCellClass:"gridstrap-cell-visible",nonContiguousPlaceholderCellClass:"gridstack-noncontiguous",dragCellClass:"gridstrap-cell-drag",resizeCellClass:"gridstrap-cell-resize",mouseMoveSelector:"body",visibleCellContainerParentSelector:null,visibleCellContainerClass:"gridstrap-container",getHtmlOfSourceCell:function(e){return e[0].outerHTML},dragCellHandleSelector:"*",draggable:!0,rearrangeOnDrag:!0,resizeHandleSelector:null,resizeOnDrag:!0,swapMode:!1,nonContiguousCellHtml:null,autoPadNonContiguousCells:!0,updateCoordinatesOnWindowResize:!0,debug:!1,dragMouseoverThrottle:150,windowResizeDebounce:50,mousemoveDebounce:0},f.fn.gridstrap=function(e){return this.each(function(){new f.Gridstrap(this,e)})}},{"./constants":1,"./handlers":3,"./internal":4,"./methods":5,"./setup":6,"./utils":7}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Handlers=void 0;var l,c=(l=e("./constants"))&&l.__esModule?l:{default:l},C=e("./utils");function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.setup=e,this.internal=t}var e,t,l;return e=n,(t=[{key:"onDragstart",value:function(e,t,n){n===this.setup.Context&&e.preventDefault()}},{key:"onTouchStart",value:function(e,t,n){this.setup.jQuery,this.setup.Options;e.preventDefault(),e.touches.length&&this.onMousedown(C.Utils.ConvertTouchToMouseEvent(e),t,n)}},{key:"onMousedown",value:function(e,t,n){var l=this.setup.jQuery,i=this.setup.Context,s=this.setup.Options;n===i&&(t.hasClass(s.nonContiguousPlaceholderCellClass)||(s.resizeHandleSelector&&l(e.target).closest(s.resizeHandleSelector).length?t.hasClass(s.resizeCellClass)||(t.addClass(s.resizeCellClass),this.internal.SetMouseDownData(e,t)):s.draggable&&!t.hasClass(s.dragCellClass)&&(this.internal.SetMouseDownData(e,t),t.addClass(s.dragCellClass),this.internal.MoveDraggedCell(e,t))))}},{key:"onMouseover",value:function(e,t,n){var l=this,i=(this.setup.jQuery,this.setup.Context,this.setup.Options);if(this.internal.LastMouseOverCellTarget=null,n.options.draggable){var s=this.internal.$GetDraggingCell();s.length&&t.length&&!s.closest(t).length&&(this.internal.LastMouseOverCellTarget=t,C.Utils.Limit(function(){n.options.rearrangeOnDrag&&(l.internal.MoveCell(s,t,n),l.internal.MoveDraggedCell(e,s,!0))},i.dragMouseoverThrottle))}}},{key:"onTouchmove",value:function(e){this.onMousemove(C.Utils.ConvertTouchToMouseEvent(e))}},{key:"onMousemove",value:function(e){var t=this.setup.jQuery,n=(this.setup.Context,this.setup.Options),l=t(this.setup.ResizeCellSelector);if(l.length){var i=l.data(c.default.DATA_MOUSEDOWN_POSITION_DIFF),s=l.data(c.default.DATA_MOUSEDOWN_SIZE),r=l.data(c.default.DATA_CELL_POSITION_AND_SIZE),o=C.Utils.GetAbsoluteOffsetForElementFromMouseEvent(l,e,i),a=s.width+o.left-r.left,u=s.height+o.top-r.top;l.css("width",a),l.css("height",u),n.resizeOnDrag&&this.internal.ResizeCell(l,a,u)}else{var d=this.internal.$GetDraggingCell();d.length&&(this.internal.MoveDraggedCell(e,d),n.nonContiguousCellHtml&&n.rearrangeOnDrag&&n.autoPadNonContiguousCells&&this.internal.UpdateNonContiguousCellsForDrag(d,e))}}},{key:"onTouchend",value:function(e){this.onMouseup(e)}},{key:"onMouseup",value:function(e){var t=this.setup.jQuery,n=this.setup.Context,l=this.setup.Options;this.setup.$Element,this.setup.Document;if(l.draggable){var i=t(this.setup.ResizeCellSelector);if(l.resizeHandleSelector&&i.length){if(!l.resizeOnDrag){i.data(c.default.DATA_MOUSEDOWN_POSITION_DIFF);var s=originalMouseDownCellPosition.w+e.pageX-originalMouseDownPagePosition.x,r=originalMouseDownCellPosition.h+e.pageY-originalMouseDownPagePosition.y;this.internal.ResizeCell(i,s,r)}return i.removeClass(l.resizeCellClass),void C.Utils.ClearMouseDownData(i)}var o=this.internal.$GetDraggingCell();if(0<o.length){if(l.nonContiguousCellHtml&&!l.rearrangeOnDrag&&l.autoPadNonContiguousCells){this.internal.UpdateNonContiguousCellsForDrag(o,e);var a=this.internal.$GetNonDraggedCellFromPoint(o,e);a.length?this.internal.LastMouseOverCellTarget=a:this.internal.LastMouseOverCellTarget=null}o.removeClass(l.dragCellClass),C.Utils.ClearMouseDownData(i);var u=o.data(c.default.DATA_CELL_POSITION_AND_SIZE);n.setCellAbsolutePositionAndSize(o,u),this.internal.LastMouseOverCellTarget&&!l.rearrangeOnDrag&&this.internal.MoveCell(o,this.internal.LastMouseOverCellTarget,n)}}}}])&&i(e.prototype,t),l&&i(e,l),n}();n.Handlers=s},{"./constants":1,"./utils":7}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Internal=void 0;var l,A=(l=e("./constants"))&&l.__esModule?l:{default:l},D=e("./utils");function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.setup=e,this.document=document,this.cellsArray=[]}var e,n,l;return e=t,(n=[{key:"InitOriginalCells",value:function(){var t=this,n=t.setup.jQuery;t.cellsArray=[],t.setup.$OriginalCells.each(function(e){t.InitCellsHiddenCopyAndSetAbsolutePosition(n(this))})}},{key:"InitEventHandlers",value:function(e){function t(e){return"".concat(e,".gridstrap")}var n=this.setup.Window,l=this.setup.Context,i=this.setup.Options;this.HandleCellMouseEvent(l,"".concat(t(A.default.EVENT_DRAGSTART)),!0,e.onDragstart.bind(e)),this.HandleCellMouseEvent(l,"".concat(t(A.default.EVENT_MOUSEDOWN)),!0,e.onMousedown.bind(e)),this.HandleCellMouseEvent(l,"".concat(t(A.default.EVENT_TOUCHSTART)),!0,e.onTouchStart.bind(e)),this.HandleCellMouseEvent(l,"".concat(t(A.default.EVENT_MOUSEOVER)),!1,e.onMouseover.bind(e)),$(i.mouseMoveSelector).on("".concat(t(A.default.EVENT_MOUSEMOVE)),D.Utils.Debounce(e.onMousemove.bind(e),i.mousemoveDebounce)).on("".concat(t(A.default.EVENT_TOUCHMOVE)),D.Utils.Debounce(e.onTouchmove.bind(e),i.mousemoveDebounce)).on("".concat(t(A.default.EVENT_MOUSEUP)),e.onMouseup.bind(e)).on("".concat(t(A.default.EVENT_TOUCHEND)),e.onTouchend.bind(e)),i.updateCoordinatesOnWindowResize&&$(n).on("".concat(t(A.default.EVENT_RESIZE)),D.Utils.Debounce(l.updateVisibleCellCoordinates,i.windowResizeDebounce))}},{key:"InitCellsHiddenCopyAndSetAbsolutePosition",value:function(t){var e=this.setup.jQuery,n=this.setup.Context,l=this.setup.Options;this.ModifyCellsArray(function(e){return e.push(t)}),l.debug&&!t.is(":visible")&&console.log("Grid cell is invisible. Gridstrap should not initialise an invisible grid. (".concat(this.el.nodeName,"): ").concat(t[0].nodeName,")"));var i=l.getHtmlOfSourceCell.call(n,t),s=D.Utils.GetPositionAndSizeOfCell(t);t.before(i);var r=t.prev();r.addClass(l.hiddenCellClass),t.addClass(l.visibleCellClass),t.data(A.default.DATA_HIDDEN_CELL,r),r.data(A.default.DATA_VISIBLE_CELL,t),e(this.setup.VisibleCellContainerSelector).append(t.detach()),n.setCellAbsolutePositionAndSize(t,s)}},{key:"HandleCellMouseEvent",value:function(n,e,l,i){var t=n.options.gridCellSelector+" "+n.options.dragCellHandleSelector;n.options.dragCellHandleSelector!==$.Gridstrap.defaultOptions.dragCellHandleSelector&&e!==A.default.EVENT_MOUSEOVER||(t=n.options.gridCellSelector+","+t),$(n.options.visibleCellContainerParentSelector).on(e,t,function(e){var t=n.$getCellOfElement(e.target);l&&!t.length||i(e,t,n)})}},{key:"SetMouseDownData",value:function(e,t){this.setup.Context,this.setup.Options;var n=t.offset(),l=t.outerWidth(),i=t.outerHeight();t.data(A.default.DATA_MOUSEDOWN_POSITION_DIFF,{x:e.pageX-n.left,y:e.pageY-n.top}),t.data(A.default.DATA_MOUSEDOWN_SIZE,{width:l,height:i})}},{key:"GetNonDraggedElementFromPoint",value:function(e,t){var n=this.setup.Document,l=(this.setup.jQuery,e.css("pointer-events")),i=e.css("touch-action");e.css("pointer-events","none"),e.css("touch-action","none");var s=n.elementFromPoint(t.clientX,t.clientY);return e.css("pointer-events",l),e.css("touch-action",i),s}},{key:"MoveDraggedCell",value:function(t,e,n){var l=this.setup.jQuery,i=this.setup.Context,s=(this.setup.Options,this.setup.Document,this.setup.$Element),r=e.data(A.default.DATA_MOUSEDOWN_POSITION_DIFF),o=D.Utils.GetAbsoluteOffsetForElementFromMouseEvent(e,t,r),a=l.Event(A.default.EVENT_CELL_DRAG,{left:o.left,top:o.top,target:e[0]});if(s.trigger(a),!a.isDefaultPrevented()&&(e.css("left",o.left),e.css("top",o.top),!n)){var u=function(e){e.trigger(l.Event(A.default.EVENT_MOUSEOVER,{pageX:t.pageX,pageY:t.pageY,target:e[0]}))},d=this.GetNonDraggedElementFromPoint(e,t),c=i.$getCellOfElement(d);c.length?u(c):this.AdditionalGridstrapDragTargetSelector&&l(this.AdditionalGridstrapDragTargetSelector).each(function(){var e=l(this).data(A.default.DATA_GRIDSTRAP);if(e){var t=e.$getCellOfElement(d);t.length&&u(t)}})}}},{key:"GetCellAndInternalIndex",value:function(e){var t=this.setup.jQuery,n=this.setup.Context;this.setup.Options;if(!e)return null;for(var l=t(e),i=null,s=0;s<this.CellsArray.length&&!i;s++){if(0<l.closest(this.CellsArray[s]).length)this.$GetClosestGridstrap(l).is(n.$el)&&(i={index:s,$cell:this.CellsArray[s]})}return i}},{key:"$GetClosestGridstrap",value:function(e){function t(e){return n(e).filter(function(){return!!n(this).data(A.default.DATA_GRIDSTRAP)})}var n=this.setup.jQuery,l=t(e);return l.length?l.first():t(n(e).parents()).first()}},{key:"$GetDraggingCell",value:function(){var e=this.setup.jQuery,t=this.setup.Context,n=(this.setup.Options,e(this.setup.DragCellSelector));return n.length&&this.$GetClosestGridstrap(n).is(t.$el)?n:e()}},{key:"MoveCell",value:function(e,t,n){var l=this.setup.jQuery,i=this.setup.Context,s=this.setup.Options,r=e.data(A.default.DATA_HIDDEN_CELL),o=t.data(A.default.DATA_HIDDEN_CELL);if(!r.is(o))if(n!==i){if(this.AdditionalGridstrapDragTargetSelector&&l(this.AdditionalGridstrapDragTargetSelector).filter(function(){return l(this).data(A.default.DATA_GRIDSTRAP)===n}).first().length){if(s.swapMode){var a=D.Utils.GetPositionAndSizeOfCell(t),u=D.Utils.GetPositionAndSizeOfCell(e),d=n.detachCell(t),c=i.detachCell(e),C=c.hasClass(s.dragCellClass);C&&c.removeClass(s.dragCellClass),D.Utils.SwapJQueryElements(c,d);var h=n.attachCell(c),f=i.attachCell(d);D.Utils.ClearAbsoluteCSS(h),D.Utils.ClearAbsoluteCSS(f),n.setCellAbsolutePositionAndSize(h,u),i.setCellAbsolutePositionAndSize(f,a),n.setCellAbsolutePositionAndSize(h,a),i.setCellAbsolutePositionAndSize(f,u),C&&h.addClass(s.dragCellClass)}else{var p=D.Utils.GetPositionAndSizeOfCell(e),g=i.detachCell(e),v=g.hasClass(s.dragCellClass);v&&g.removeClass(s.dragCellClass),D.Utils.DetachAndInsertInPlaceJQueryElement(g,o);var E=n.attachCell(g);E.removeClass(s.visibleCellClass),n.setCellAbsolutePositionAndSize(E,p),E.addClass(s.visibleCellClass),v&&E.addClass(s.dragCellClass)}n.updateVisibleCellCoordinates(),i.updateVisibleCellCoordinates()}}else s.swapMode?D.Utils.SwapJQueryElements(r,o):D.Utils.DetachAndInsertInPlaceJQueryElement(r,o),i.updateVisibleCellCoordinates()}},{key:"ResizeCell",value:function(e,t,n){var l=this.setup.jQuery,i=this.setup.Context,s=this.setup.$Element,r=l.Event(A.default.EVENT_CELL_RESIZE,{width:t,height:n,target:e[0]});if(s.trigger(r),!r.isDefaultPrevented()){var o=e.data(A.default.DATA_HIDDEN_CELL);o.css("width",t),o.css("height",n),i.updateVisibleCellCoordinates()}}},{key:"$GetHiddenCellsInElementOrder",value:function(){var n=this.setup.jQuery,e=(this.setup.Options,this.setup.$Element),l=this;return e.find(this.setup.HiddenCellSelector).filter(function(){var e=n(this).data(A.default.DATA_VISIBLE_CELL);if(!e||!e.length)return!1;for(var t=0;t<l.CellsArray.length;t++)if(l.CellsArray[t].is(e))return!0;return!1})}},{key:"ModifyCellsArray",value:function(e){e(this.cellsArray)}},{key:"UpdateNonContiguousCellsForDrag",value:function(e,t){function l(e){return e.left+e.width+1e5*(e.top+e.height)}var i=this.setup.jQuery,s=this.setup.Options,r=D.Utils.GetPositionAndSizeOfCell(e);this.$GetHiddenCellsInElementOrder().each(function(e,t){if(!i(t).data(A.default.DATA_VISIBLE_CELL).hasClass(s.nonContiguousPlaceholderCellClass)){var n=D.Utils.GetPositionAndSizeOfCell(i(t));l(n)>l(r)&&(r=n)}}),this.AppendOrRemoveNonContiguousCellsWhile(function(e,t){var n=D.Utils.GetPositionAndSizeOfCell(e.last());return t?n.top-r.top<2*r.height:n.top-r.top>2*r.height})&&this.MoveDraggedCell(t,e)}},{key:"AppendOrRemoveNonContiguousCellsWhile",value:function(e){for(var n=this.setup.jQuery,l=this.setup.Options,t=this.setup.Context,i=!1,s=this.$GetHiddenCellsInElementOrder();e(s,!0);){var r=t.insertCell(l.nonContiguousCellHtml,s.length);r.addClass(l.nonContiguousPlaceholderCellClass);var o=r.data(A.default.DATA_HIDDEN_CELL);s=s.add(o),i=!0}for(var a=s.last(),u=null,d=function(){return u=u||s.filter(function(e,t){return D.Utils.GetPositionAndSizeOfCell(n(t)).top===D.Utils.GetPositionAndSizeOfCell(a).top})};e(s,!1)&&d().filter(function(e,t){return n(t).data(A.default.DATA_VISIBLE_CELL).hasClass(l.nonContiguousPlaceholderCellClass)}).length===d().length&&0<d().length;)t.removeCell(a.data(A.default.DATA_VISIBLE_CELL)),s=s.not(a),a=s.last(),i=!(u=null);return i}},{key:"AdditionalGridstrapDragTargetSelector",get:function(){return this.additionalGridstrapDragTargetSelector},set:function(e){this.additionalGridstrapDragTargetSelector=e}},{key:"LastMouseOverCellTarget",get:function(){return this.lastMouseOverCellTarget},set:function(e){this.lastMouseOverCellTarget=e}},{key:"CellsArray",get:function(){return this.cellsArray}}])&&i(e.prototype,n),l&&i(e,l),t}();n.Internal=s},{"./constants":1,"./utils":7}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Methods=void 0;var l,o=(l=e("./constants"))&&l.__esModule?l:{default:l},r=e("./utils");function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=function(){function l(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.setup=e,this.internal=t,this.handlers=n}var e,t,n;return e=l,(t=[{key:"$getCellOfElement",value:function(e){var t=this.setup.jQuery,n=(this.setup.Context,this.setup.Options,this.internal.GetCellAndInternalIndex(e));return n?n.$cell:t()}},{key:"setCellAbsolutePositionAndSize",value:function(e,t){var n=this.setup.jQuery,l=(this.setup.Context,this.setup.Options,this.setup.$Element),i=n.Event(o.default.EVENT_CELL_REDRAW,{left:t.left,top:t.top,width:t.width,height:t.height,target:e[0]});l.trigger(i),i.isDefaultPrevented()||(e.data(o.default.DATA_CELL_POSITION_AND_SIZE,t),e.css("left",t.left),e.css("top",t.top),e.css("width",t.width),e.css("height",t.height))}},{key:"updateVisibleCellCoordinates",value:function(){for(var e=this.setup.jQuery,t=(this.setup.Context,this.setup.Options,this.internal.$GetDraggingCell(),0);t<this.internal.CellsArray.length;t++){var n=this.internal.CellsArray[t],l=n.data(o.default.DATA_HIDDEN_CELL),i=r.Utils.GetPositionAndSizeOfCell(l);this.setCellAbsolutePositionAndSize(n,i)}for(t=0;t<this.internal.CellsArray.length;t++){this.internal.CellsArray[t].find("*").filter(function(){return!!e(this).data(o.default.DATA_GRIDSTRAP)}).each(function(){e(this).data(o.default.DATA_GRIDSTRAP).updateVisibleCellCoordinates()})}}},{key:"insertCell",value:function(e,n){var t,l=this.setup.jQuery,i=this.setup.Options,s=this.setup.$Element,r=this.internal.$GetHiddenCellsInElementOrder();return void 0===n&&(n=r.length),n>r.length&&i.nonContiguousCellHtml&&i.autoPadNonContiguousCells&&(this.internal.AppendOrRemoveNonContiguousCellsWhile(function(e,t){return!!t&&e.length<n}),r=this.internal.$GetHiddenCellsInElementOrder()),t=n===r.length?0===r.length?l(e).appendTo(s):l(e).insertAfter(r.last()):l(e).insertBefore(r.eq(n)),this.attachCell(t),t}},{key:"attachCell",value:function(e){var t=this.setup.jQuery,n=(this.setup.Options,this.setup.$Element);if(!t(e).closest(n).is(n))throw new Error(o.default.ERROR_INVALID_ATTACH_ELEMENT);return this.internal.InitCellsHiddenCopyAndSetAbsolutePosition(e),this.updateVisibleCellCoordinates(),t(e)}},{key:"detachCell",value:function(e){var t=this.setup.Options,n=this.internal.GetCellAndInternalIndex(e),l=n.$cell.data(o.default.DATA_HIDDEN_CELL),i=n.$cell.detach();r.Utils.ClearAbsoluteCSS(i),i.removeData(o.default.DATA_HIDDEN_CELL),i.removeClass(t.visibleCellClass);var s=i.insertAfter(l);return l.remove(),this.internal.ModifyCellsArray(function(e){return e.splice(n.index,1)}),this.updateVisibleCellCoordinates(),s}},{key:"removeCell",value:function(e){this.detachCell(e).remove(),this.updateVisibleCellCoordinates()}},{key:"moveCell",value:function(e,n,t){var l=this.setup.Options,i=this.setup.Context,s=this.$getCells();n>s.length&&l.nonContiguousCellHtml&&l.autoPadNonContiguousCells&&(this.internal.AppendOrRemoveNonContiguousCellsWhile(function(e,t){return!!t&&e.length<=n}),s=this.$getCells());var r=this.internal.GetCellAndInternalIndex(e);this.internal.MoveCell(r.$cell,s.eq(n),t||i)}},{key:"$getCellFromCoordinates",value:function(e,t){var n=this.setup.Document,l=this.setup.jQuery,i=n.elementFromPoint(e,t),s=this.internal.GetCellAndInternalIndex(i);return s?s.$cell:l()}},{key:"getCellIndexFromCoordinates",value:function(e,t){var n=this.setup.Document,l=(this.setup.jQuery,n.elementFromPoint(e,t)),i=this.internal.GetCellAndInternalIndex(l);return i?this.$getCells().index(i.$cell):-1}},{key:"$getCells",value:function(){var e=this.setup.jQuery,t=this.internal.$GetHiddenCellsInElementOrder().map(function(){return e(this).data(o.default.DATA_VISIBLE_CELL)[0]});return e(t)}},{key:"$getHiddenCells",value:function(){return this.internal.$GetHiddenCellsInElementOrder()}},{key:"$getCellContainer",value:function(){return(0,this.setup.jQuery)(this.setup.VisibleCellContainerSelector)}},{key:"updateOptions",value:function(e){var t=this.setup.jQuery,n=this.setup.Options;this.setup.Options=t.extend({},n,e)}},{key:"getCellIndexOfElement",value:function(e){var t=this.$getCellOfElement(e);return this.$getCells().index(t)}},{key:"setAdditionalGridstrapDragTarget",value:function(e){var t=this.setup.jQuery,n=this.handlers,l=this,i="".concat(o.default.EVENT_MOUSEOVER,".gridstrap-additional-").concat(this.setup.IdPrefix);l.internal.AdditionalGridstrapDragTargetSelector&&t(l.internal.AdditionalGridstrapDragTargetSelector).each(function(){t(t(this).data(o.default.DATA_GRIDSTRAP).options.visibleCellContainerParentSelector).off(i)}),l.internal.AdditionalGridstrapDragTargetSelector=e,l.internal.AdditionalGridstrapDragTargetSelector&&t(l.internal.AdditionalGridstrapDragTargetSelector).each(function(){l.internal.HandleCellMouseEvent(t(this).data(o.default.DATA_GRIDSTRAP),i,!1,n.onMouseover.bind(n))})}},{key:"modifyCell",value:function(e,t){var n=this.setup.Context,l=this.$getCells().eq(e),i=l.data(o.default.DATA_HIDDEN_CELL),s=!1;t.call(n,function(){return s=!0,l},function(){return i}),s&&i.html(l.html()),this.updateVisibleCellCoordinates()}},{key:"padWithNonContiguousCells",value:function(i){var s=this.setup.jQuery,r=this.setup.Options;if(!r.nonContiguousCellHtml)throw new Error(o.default.ERROR_NONCONTIGUOUS_HTML_UNDEFINED);this.internal.$GetHiddenCellsInElementOrder();this.internal.AppendOrRemoveNonContiguousCellsWhile(function(e,t){if(!t)return!1;var n=e.length,l=e.filter(function(e,t){return s(t).data(o.default.DATA_VISIBLE_CELL).hasClass(r.nonContiguousPlaceholderCellClass)}).length;return i(n,l)})}}])&&i(e.prototype,t),n&&i(e,n),l}();n.Methods=s},{"./constants":1,"./utils":7}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Setup=void 0;var a=e("./utils");function l(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var i=function(){function o(e,t,n,l,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var s=i.options;this.$originalCells=l.find(s.gridCellSelector),this.idPrefix=a.Utils.GenerateRandomId();var r="gridstrap-"+this.idPrefix;this.visibleCellContainerSelector="#"+r,this.dragCellSelector=this.visibleCellContainerSelector+" "+a.Utils.ConvertCssClassToJQuerySelector(s.dragCellClass)+":first",this.resizeCellSelector=this.visibleCellContainerSelector+" "+a.Utils.ConvertCssClassToJQuerySelector(s.resizeCellClass)+":first",this.visibleCellContainerClassSelector=a.Utils.ConvertCssClassToJQuerySelector(s.visibleCellContainerClass)+":first",this.hiddenCellSelector=a.Utils.ConvertCssClassToJQuerySelector(s.hiddenCellClass),s.visibleCellContainerParentSelector=s.visibleCellContainerParentSelector||l,e(s.visibleCellContainerParentSelector).append('<div id="'+r+'" class="'+s.visibleCellContainerClass+'"></div>'),this.window=t,this.document=n,this.$=e,this.$el=l,this.context=i}var e,t,n;return e=o,(t=[{key:"Window",get:function(){return this.window}},{key:"Document",get:function(){return this.document}},{key:"jQuery",get:function(){return this.$}},{key:"Options",get:function(){return this.context.options},set:function(e){this.context.options=e}},{key:"$Element",get:function(){return this.$el}},{key:"Context",get:function(){return this.context}},{key:"$OriginalCells",get:function(){return this.$originalCells}},{key:"IdPrefix",get:function(){return this.idPrefix}},{key:"VisibleCellContainerSelector",get:function(){return this.visibleCellContainerSelector}},{key:"DragCellSelector",get:function(){return this.dragCellSelector}},{key:"ResizeCellSelector",get:function(){return this.resizeCellSelector}},{key:"VisibleCellContainerClassSelector",get:function(){return this.visibleCellContainerClassSelector}},{key:"HiddenCellSelector",get:function(){return this.hiddenCellSelector}}])&&l(e.prototype,t),n&&l(e,n),o}();n.Setup=i},{"./utils":7}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Utils=void 0;var l,i=(l=e("./constants"))&&l.__esModule?l:{default:l};function s(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var r=function(){function l(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l)}var e,t,n;return e=l,n=[{key:"GenerateRandomId",value:function(){return Math.random().toString(36).substr(2,5)+Math.round(1e3*Math.random()).toString()}},{key:"ConvertCssClassToJQuerySelector",value:function(e){return e.replace(/(^ *| +)/g,".")}},{key:"Debounce",value:function(l,i,s,r){return void 0===r&&(r=null),function(){var e=this,t=arguments,n=!i||s&&!r;return clearTimeout(r),n?l.apply(e,t):r=setTimeout(function(){r=null,s||l.apply(e,t)},i),r}}},{key:"Limit",value:function(e,t){var n=(new Date).getTime();t<n-(l.limit||0)&&(e(),l.limit=n)}},{key:"SwapJQueryElements",value:function(s,r){function e(e){var t=s.is(e)?r:s,n=e.next(),l=e.prev(),i=e.parent();return 0<n.length&&!n.is(t)?function(e){n.before(e)}:0<l.length&&!l.is(t)?function(e){l.after(e)}:0<n.length&&n.is(t)?function(e){i.prepend(e)}:function(e){i.append(e)}}var t=e(s),n=e(r),l=s.detach(),i=r.detach();n(l),t(i)}},{key:"DetachAndInsertInPlaceJQueryElement",value:function(e,t){var n=t.index(),l=e.index(),i=e.detach();n<l?t.before(i):t.after(i)}},{key:"ClearAbsoluteCSS",value:function(e){e.css("top",""),e.css("left",""),e.css("width",""),e.css("height","")}},{key:"ClearMouseDownData",value:function(e){e.removeData(i.default.DATA_MOUSEDOWN_POSITION_DIFF),e.removeData(i.default.DATA_MOUSEDOWN_SIZE)}},{key:"GetAbsoluteOffsetForElementFromMouseEvent",value:function(e,t,n){var l=e.parent(),i=l.offset(),s=l.position(),r=i.left-s.left,o=i.top-s.top;return{left:t.pageX-r-n.x,top:t.pageY-o-n.y}}},{key:"GetPositionAndSizeOfCell",value:function(e){var t=e.position(),n=e.outerWidth(),l=e.outerHeight();return{left:t.left,top:t.top,width:n,height:l}}},{key:"ConvertTouchToMouseEvent",value:function(e){for(var t=null,n=0;!t&&n<e.changedTouches.length;n++)0===e.changedTouches[n].identifier&&(t=e.changedTouches[n]);return e.pageX=t.pageX,e.pageY=t.pageY,e.clientX=t.clientX,e.clientY=t.clientY,e}}],(t=null)&&s(e.prototype,t),n&&s(e,n),l}();n.Utils=r},{"./constants":1}]},{},[2]);
//# sourceMappingURL=jquery.gridstrap.min.js.map