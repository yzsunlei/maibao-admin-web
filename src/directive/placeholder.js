import Vue from 'vue';

Vue.directive('holder', {
  inserted: function (el, binding) {

    //判断是否支持placeholder属性 如果不支持 执行
    if (el && !("placeholder" in document.createElement("input"))) {
      var funPlaceholder = function (element, binding) {
        var placeholder = '';
        if (binding.value && binding.value.pass === 'password') {
          element.firstEl.parentNode.style.display = 'block';
          element.secondEl.parentNode.style.display = 'none';
          placeholder = element.firstEl.getAttribute('placeholder');
          //获取焦点时切换为 password框
          element.firstEl.onfocus = function () {
            element.firstEl.parentNode.style.display = 'none';
            element.secondEl.parentNode.style.display = 'block';
            element.secondEl.focus();
            // 如果值和placeholder值相等 说明没有更改或者输入 置为空
            if (element.secondEl.value === placeholder) {
              element.secondEl.value = "";
            }
            element.secondEl.style.color = '';
            document.addEventListener('selectionchange',selectionChg);
          };
          element.secondEl.onblur = function(){
            document.removeEventListener('selectionchange',selectionChg);
          };
          //样式初始化
          if (element.firstEl.value === "") {
            element.firstEl.value = placeholder;
            element.firstEl.style.color = '#bfcbd9';
          }
        } else {
          //text input元素
          placeholder = element.getAttribute('placeholder');
          element.addEventListener('focus',function () {
            // 如果值和placeholder值相等 说明没有更改或者输入 置为空
            if (this.value === placeholder) {
              this.value = "";
            }
            this.style.color = '';
            document.addEventListener('selectionchange',selectionChg);
          }) ;
          element.addEventListener('blur',function () {
            document.removeEventListener('selectionchange',selectionChg);
          });
          //样式初始化
          if (element.value === "") {
            element.value = placeholder;
            element.style.color = '#bfcbd9';
          }
        }
      };
      let element;
      // find input元素
      var findEle = function (el) {
        if (el.tagName.toLowerCase() !== 'input') {
          for (var i = 0; i < el.childNodes.length; i++) {
            if (el.childNodes[i].tagName && el.childNodes[i].tagName.toLowerCase() === 'input') {
              return el.childNodes[i];
            }
          }
        }
      };
      //判断是否是 密码输入框
      //因为在ie中 无法更改input的type属性 采用2个input元素切换的方式
      if (binding.value && binding.value.pass === 'password') {
        //找到相邻元素的input元素的父元素
        let preEl = el.previousElementSibling;
        element = {
          firstEl: findEle(el),
          secondEl: findEle(preEl)
        }
      } else {
        element = findEle(el)
      }

      // 对获取焦点的元素监听selectionchange事件，修复ie9 delete不触发的bug
      var selectionChg = function(){
        var el = document.activeElement;
          if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT')) {
            var ev = document.createEvent('CustomEvent');
            ev.initCustomEvent('input', true, true, {});
            setTimeout(function(){
              el.dispatchEvent(ev);
            },20);
          }
      };

      funPlaceholder(element, binding);
    }
  }
});
