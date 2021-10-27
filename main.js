(()=>{function e(e=JSON.parse(localStorage.getItem("todos"))){if(!e)return null;const t=document.getElementById("items-left");e.forEach((function(e){const n=document.createElement("li"),o=document.createElement("div"),c=document.createElement("input"),d=document.createElement("span"),s=document.createElement("p"),a=document.createElement("button"),l=document.createElement("img");n.classList.add("card"),a.classList.add("clear"),o.classList.add("cb-container"),c.classList.add("cb-input"),s.classList.add("item"),d.classList.add("check"),a.classList.add("clear"),n.setAttribute("draggable",!0),l.setAttribute("src","./images/trash.svg"),l.setAttribute("alt","Remove"),c.setAttribute("type","checkbox"),s.textContent=e.item,e.isCompleted&&(n.classList.add("checked"),c.setAttribute("checked","checked")),n.addEventListener("dragstart",(function(){this.classList.add("dragging")})),n.addEventListener("dragend",(function(){this.classList.remove("dragging")})),c.addEventListener("click",(function(){const e=this.parentElement.parentElement,n=this.checked;!function(e,t){const n=JSON.parse(localStorage.getItem("todos"));n[e].isCompleted=t,localStorage.setItem("todos",JSON.stringify(n))}([...document.querySelectorAll(".todos .card")].indexOf(e),n),n?e.classList.add("checked"):e.classList.remove("checked"),t.textContent=document.querySelectorAll(".todos .card:not(.checked)").length})),a.addEventListener("click",(function(){const e=this.parentElement;e.classList.add("fall"),function(e){const t=JSON.parse(localStorage.getItem("todos"));t.splice(e,1),localStorage.setItem("todos",JSON.stringify(t))}([...document.querySelectorAll(".todos .card")].indexOf(e)),e.addEventListener("animationend",(function(){setTimeout((function(){e.remove(),t.textContent=document.querySelectorAll(".todos .card:not(.checked)").length}),100)}))})),a.appendChild(l),o.appendChild(c),o.appendChild(d),n.appendChild(o),n.appendChild(s),n.appendChild(a),document.querySelector(".todos").appendChild(n)})),t.textContent=document.querySelectorAll(".todos .card:not(.checked)").length}document.addEventListener("DOMContentLoaded",(function(){e();const t=document.getElementById("add-btn"),n=document.querySelector(".txt-input");t.addEventListener("click",(function(){const t=n.value.trim();if(t){n.value="";const o=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],c={item:t,isCompleted:!1};e([c]),o.push(c),localStorage.setItem("todos",JSON.stringify(o))}n.focus()})),n.addEventListener("keydown",(function(e){13===e.keyCode&&t.click()})),document.querySelector(".filter").addEventListener("click",(function(e){const t=e.target.id;t&&(document.querySelector(".on").classList.remove("on"),document.getElementById(t).classList.add("on"),document.querySelector(".todos").className=`todos ${t}`)})),document.getElementById("clear-completed").addEventListener("click",(function(){deleteIndexes=[],document.querySelectorAll(".card.checked").forEach((function(e){deleteIndexes.push([...document.querySelectorAll(".todos .card")].indexOf(e)),e.classList.add("fall"),e.addEventListener("animationend",(function(t){setTimeout((function(){e.remove()}),100)}))})),function(e){let t=JSON.parse(localStorage.getItem("todos"));t=t.filter((function(t,n){return!e.includes(n)})),localStorage.setItem("todos",JSON.stringify(t))}(deleteIndexes)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVM5QixLQUFLK0IsVUFBVWhDLElBdkJ6QzBELENBQWVKLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcblxuXG5mdW5jdGlvbiBtYWluKCkge1xuICBhZGRUb2RvKCk7XG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ0blwiKTtcbiAgY29uc3QgdHh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR4dC1pbnB1dFwiKTtcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXRlbSA9IHR4dElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdHh0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgY29uc3QgdG9kb3MgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb2RvID0ge1xuICAgICAgICBpdGVtLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgYWRkVG9kbyhbY3VycmVudFRvZG9dKTtcbiAgICAgIHRvZG9zLnB1c2goY3VycmVudFRvZG8pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgICB0eHRJbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgXG4gIC8vIGFkZCB0b2RvIGFsc28gb24gZW50ZXIga2V5IGV2ZW50XG4gICAgdHh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgYWRkLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIC8vIGZpbHRlciB0b2RvIC0gYWxsLCBhY3RpdmUsIGNvbXBsZXRlZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGlmIChpZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKS5jbGFzc05hbWUgPSBgdG9kb3MgJHtpZH1gO1xuICAgIH1cbiAgfSk7XG4gIFxuICBcbiAgLy8gY2xlYXIgY29tcGxldGVkXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiY2xlYXItY29tcGxldGVkXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVJbmRleGVzID0gW107XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQuY2hlY2tlZFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XG4gICAgICAgIGRlbGV0ZUluZGV4ZXMucHVzaChcbiAgICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvcyAuY2FyZFwiKV0uaW5kZXhPZihjYXJkKVxuICAgICAgICApO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJmYWxsXCIpO1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZU1hbnlUb2RvKGRlbGV0ZUluZGV4ZXMpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXRlVG9kbyhpbmRleCwgY29tcGxldGVkKSB7XG4gIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgdG9kb3NbaW5kZXhdLmlzQ29tcGxldGVkID0gY29tcGxldGVkO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlTWFueVRvZG8oaW5kZXhlcykge1xuICBsZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICB0b2RvcyA9IHRvZG9zLmZpbHRlcihmdW5jdGlvbiAodG9kbywgaW5kZXgpIHtcbiAgICByZXR1cm4gIWluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFRvZG8odG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpKSB7XG4gIGlmICghdG9kb3MpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBpdGVtc0xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zLWxlZnRcIik7XG4gIC8vIGNyZWF0ZSBjYXJkc1xuICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBjYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgLy8gQWRkIGNsYXNzZXNcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xlYXJcIik7XG4gICAgY2JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNiLWNvbnRhaW5lclwiKTtcbiAgICBjYklucHV0LmNsYXNzTGlzdC5hZGQoXCJjYi1pbnB1dFwiKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsZWFyXCIpO1xuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL3RyYXNoLnN2Z1wiKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUmVtb3ZlXCIpO1xuICAgIGNiSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIC8vIHNldCB0b2RvIGl0ZW0gZm9yIGNhcmRcbiAgICBpdGVtLnRleHRDb250ZW50ID0gdG9kby5pdGVtO1xuICAgIC8vIGlmIGNvbXBsZXRlZCAtPiBhZGQgcmVzcGVjdGl2ZSBjbGFzcyAvIGF0dHJpYnV0ZVxuICAgIGlmICh0b2RvLmlzQ29tcGxldGVkKSB7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgY2JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbiAgICB9XG4gICAgLy8gQWRkIGRyYWcgbGlzdGVuZXIgdG8gY2FyZFxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgICB9KTtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuICAgIH0pO1xuICAgIC8vIEFkZCBjbGljayBsaXN0ZW5lciB0byBjaGVja2JveFxuICAgIGNiSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDYXJkID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgICAgc3RhdGVUb2RvKFxuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvcyAuY2FyZFwiKV0uaW5kZXhPZihcbiAgICAgICAgICBjb3JyZXNwb25kaW5nQ2FyZFxuICAgICAgICApLFxuICAgICAgICBjaGVja2VkXG4gICAgICApO1xuICAgICAgY2hlY2tlZFxuICAgICAgICA/IGNvcnJlc3BvbmRpbmdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpXG4gICAgICAgIDogY29ycmVzcG9uZGluZ0NhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICBpdGVtc0xlZnQudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIi50b2RvcyAuY2FyZDpub3QoLmNoZWNrZWQpXCJcbiAgICAgICkubGVuZ3RoO1xuICAgIH0pO1xuICAgIC8vIEFkZCBjbGljayBsaXN0ZW5lciB0byBjbGVhciBidXR0b25cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDYXJkID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgY29ycmVzcG9uZGluZ0NhcmQuY2xhc3NMaXN0LmFkZChcImZhbGxcIik7XG4gICAgICByZW1vdmVUb2RvKFxuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvcyAuY2FyZFwiKV0uaW5kZXhPZihcbiAgICAgICAgICBjb3JyZXNwb25kaW5nQ2FyZFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29ycmVzcG9uZGluZ0NhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvcnJlc3BvbmRpbmdDYXJkLnJlbW92ZSgpO1xuICAgICAgICAgIGl0ZW1zTGVmdC50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBcIi50b2RvcyAuY2FyZDpub3QoLmNoZWNrZWQpXCJcbiAgICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY2JDb250YWluZXIuYXBwZW5kQ2hpbGQoY2JJbnB1dCk7XG4gICAgY2JDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2JDb250YWluZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIikuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBcbiAgLy8gVXBkYXRlIGl0ZW1zTGVmdFxuICBpdGVtc0xlZnQudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnRvZG9zIC5jYXJkOm5vdCguY2hlY2tlZClcIlxuICApLmxlbmd0aDtcbn0iXSwibmFtZXMiOlsiYWRkVG9kbyIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zTGVmdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFYWNoIiwidG9kbyIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2JDb250YWluZXIiLCJjYklucHV0IiwiY2hlY2siLCJpdGVtIiwiYnV0dG9uIiwiaW1nIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJpc0NvbXBsZXRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGlzIiwicmVtb3ZlIiwiY29ycmVzcG9uZGluZ0NhcmQiLCJwYXJlbnRFbGVtZW50IiwiY2hlY2tlZCIsImluZGV4IiwiY29tcGxldGVkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0YXRlVG9kbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmRleE9mIiwibGVuZ3RoIiwic3BsaWNlIiwicmVtb3ZlVG9kbyIsInNldFRpbWVvdXQiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0eHRJbnB1dCIsInZhbHVlIiwidHJpbSIsImN1cnJlbnRUb2RvIiwicHVzaCIsImZvY3VzIiwiZSIsImtleUNvZGUiLCJjbGljayIsImlkIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZGVsZXRlSW5kZXhlcyIsImluZGV4ZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInJlbW92ZU1hbnlUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==