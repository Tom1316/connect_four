"use strict";(()=>{var c=class{constructor(){this.boardRows=6;this.boardCols=7}},r=new c,i=[];for(let e=0;e<r.boardCols;e++){let l=[];for(let t=0;t<r.boardRows;t++)l[t]=null;i.push(l)}console.log(i);function y(){let e=[];for(let l=0;l<r.boardCols;l++){let t=[];for(let n=0;n<r.boardRows;n++)t[n]=null;e.push(t)}return e}function f(){return console.log("getBoard was called"),i}function d(e){i=e,console.log("setBoard was called")}function p(){let e=document.getElementById("grid");for(let l=0;l<r.boardRows;l++){let t=document.createElement("div");t.id=`row-${l}`,t.className="row";for(let n=0;n<r.boardCols;n++){let o=document.createElement("div");o.id=`row-${l}-column-${n}`,o.className="column",t.appendChild(o)}e==null||e.appendChild(t)}}var u="nought",m="cross",C="nobody";var w;function h(e,l,t,n,o){return n[e][l]!=null||(t==!1&&(n[e][l]=o),console.log(`takeTurn was called with row: ${e}, column: ${l}`)),n}function x(e){return e=="nought"||e==null?e="cross":e="nought",console.log("Switch player called. Current player is",e),e}function v(e){for(let o=0;o<r.boardRows;o++){if(e[o].every(s=>s===e[o][0]&&s!==null))return e[o][0];let a=!0;for(let s=0;s<r.boardCols;s++)if(e[s][o]!==e[0][o]||e[s][o]===null){a=!1;break}if(a)return e[0][o]}let l=!0;for(let o=0;o<r.boardRows;o++)if(e[o][o]!==e[0][0]||e[o][o]===null){l=!1;break}if(l)return e[0][0];let t=!0;for(let o=0;o<r.boardRows;o++)if(e[o][r.boardRows-1-o]!==e[0][r.boardRows-1]||e[o][r.boardRows-1-o]===null){t=!1;break}if(t)return e[0][r.boardRows-1];if((o=>o.some(a=>a.some(s=>s===null)))(e)==!1)return"nobody";console.log("checkWinner was called")}function g(){d(y()),w="cross",console.log("resetGame was called")}function b(){return w}function P(e){w=e}function $(){return!1}var R=document.getElementById("winner-name"),E=document.getElementById("winner-display"),T=[u,m,null],k=[u,m,C];p();function G(){for(let e=0;e<r.boardCols;e++)for(let l=0;l<r.boardRows;l++)document.getElementById(`row-${l}-column-${e}`).innerHTML=""}function I(e){console.log("populateHtmlGridWithBoardState was called with",e),G();for(let l=0;l<r.boardCols;l++)for(let t=0;t<r.boardRows;t++){if(!e[t][l])continue;let n=e[t][l]===u?"\u2B55":"\u274C";document.getElementById(`row-${t}-column-${l}`).innerText=n}}function W(e){return Array.isArray(e)&&e.length===r.boardRows}function N(e){function l(n){let o=[];for(let a=0;a<n[0].length;a++){o[a]=[];for(let s=0;s<n.length;s++)o[a][s]=n[s][a]}return o}let t=l(f());return console.log(t),console.log(`transposed array has length of: ${t[0].length}`),console.log(r.boardCols),Array.isArray(e)&&t[0].length===r.boardCols&&e.every(function(n){return T.includes(n)})}function A(e,l){console.log(`positionClick was called with rowIndex=${e}, columnIndex=${l},`);let t=h(e,l,$(),f(),b());if(d(t),P(x(b())),!W(t[0])||!t.every(N))throw`Expecting "getBoard" to return a 2d array where all values are one of the strings ${T}. Actually received: ${JSON.stringify(t)}`;I(t);let n=v(t);if(n){if(typeof n!="string"||!k.includes(n))throw`Expecting "checkWinner" to return null or one of the strings ${k}. Actually received: ${n}`;R.innerText=n,E.style.display="block"}}function B(e){g(),R.innerText="",E.style.display="None",G()}for(let e=0;e<r.boardRows;e++)for(let l=0;l<r.boardCols;l++)document.getElementById(`row-${e}-column-${l}`).addEventListener("click",A.bind(null,e,l));var V=document.getElementById("reset-button");V.addEventListener("click",B);g();})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vYm9hcmQudHMiLCAiLi4vYWNhZGVteS50cyIsICIuLi9jb25uZWN0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBNYWtlIHlvdXIgY2hhbmdlcyB0byBzdG9yZSBhbmQgZ2FtZSBzdGF0ZSBpbiB0aGlzIGZpbGVcblxuZXhwb3J0IHR5cGUgUGxheWVyID0gJ25vdWdodCcgfCAnY3Jvc3MnIHwgJ25vYm9keScgfCB1bmRlZmluZWRcbmV4cG9ydCB0eXBlIENlbGwgPSBudW1iZXIgfCBQbGF5ZXIgfCBudWxsXG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc3tcbiAgYm9hcmRSb3dzOm51bWJlcj02O1xuICBib2FyZENvbHM6bnVtYmVyPTc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpXG5cblxuLy8gYnVpbGQgaW5pdGlhbCBib2FyZFxubGV0IGJvYXJkOkNlbGxbXVtdID1bXVxuIGZvcihsZXQgY29sID0gMDsgY29sIDwgc2V0dGluZ3MuYm9hcmRDb2xzOyBjb2wrKyl7XG4gIGxldCBjb2w6bnVsbFtdID0gW10gLy9pbml0aWFsaXNlIHRoZSBpbm5lciBhcnJheVxuICBmb3IobGV0IHJvdyA9IDA7IHJvdzwgc2V0dGluZ3MuYm9hcmRSb3dzOyByb3crKyl7XG4gICAgY29sW3Jvd10gPSBudWxsXG4gIH1cbiAgYm9hcmQucHVzaChjb2wpXG4gfVxuXG5jb25zb2xlLmxvZyhib2FyZClcblxuLy9mdW5jdGlvbiB0byBidWlsZCBib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkQnVpbGRlcigpOiBDZWxsW11bXSB7XG4gIGxldCBib2FyZDpDZWxsW11bXSA9W11cbiAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBzZXR0aW5ncy5ib2FyZENvbHM7IGNvbCsrKXtcbiAgICBsZXQgY29sOm51bGxbXSA9IFtdIC8vaW5pdGlhbGlzZSB0aGUgaW5uZXIgYXJyYXlcbiAgICBmb3IobGV0IHJvdyA9IDA7IHJvdzwgc2V0dGluZ3MuYm9hcmRSb3dzOyByb3crKyl7XG4gICAgICBjb2xbcm93XSA9IG51bGxcbiAgICB9XG4gICAgYm9hcmQucHVzaChjb2wpXG4gIH1cbiAgcmV0dXJuIGJvYXJkXG59XG5cbi8vIFJldHVybiB0aGUgY3VycmVudCBib2FyZCBzdGF0ZSB3aXRoIGVpdGhlciBhIG5vdWdodFRleHQgb3IgYSBjcm9zc1RleHQgaW5cbi8vIGVhY2ggcG9zaXRpb24uIFB1dCBhIG51bGwgaW4gYSBwb3NpdGlvbiB0aGF0IGhhc24ndCBiZWVuIHBsYXllZCB5ZXQuXG5cbi8vcmV0cmlldmUgdGhlIGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmQoKTogQ2VsbFtdW10ge1xuICBjb25zb2xlLmxvZygnZ2V0Qm9hcmQgd2FzIGNhbGxlZCcpXG5yZXR1cm4gYm9hcmRcbn1cblxuLy9vdmVyd3JpdGUgYm9hcmQgd2l0aCBuZXcgYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBzZXRCb2FyZChuZXdCb2FyZDogQ2VsbFtdW10pIHtcbiAgYm9hcmQgPSBuZXdCb2FyZFxuICBjb25zb2xlLmxvZygnc2V0Qm9hcmQgd2FzIGNhbGxlZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Qm9hcmQoKXsgXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRcIilcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3c8IHNldHRpbmdzLmJvYXJkUm93czsgcm93ICsrKXtcbiAgICBsZXQgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93RWxlbWVudC5pZCA9IGByb3ctJHtyb3d9YDtcbiAgICByb3dFbGVtZW50LmNsYXNzTmFtZSA9IFwicm93XCJcblxuICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHNldHRpbmdzLmJvYXJkQ29sczsgY29sdW1uICsrKXtcbiAgICAgIGxldCBjb2x1bW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbHVtbkVsZW1lbnQuaWQgPSBgcm93LSR7cm93fS1jb2x1bW4tJHtjb2x1bW59YDtcbiAgICAgIGNvbHVtbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJjb2x1bW5cIlxuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjb2x1bW5FbGVtZW50KVxuICAgIH1cbiAgICBncmlkPy5hcHBlbmRDaGlsZChyb3dFbGVtZW50KVxuICB9XG5cbn1cblxuXG5cbiIsICIvL1xuLy8gTWFrZSB5b3VyIGNoYW5nZXMgdG8gc3RvcmUgYW5kIHVwZGF0ZSBnYW1lIHN0YXRlIGluIHRoaXMgZmlsZVxuXG5pbXBvcnQgeyBQbGF5ZXIsIENlbGwsIGdldEJvYXJkLCBzZXRCb2FyZCwgc2V0dGluZ3MsIGJvYXJkQnVpbGRlciB9IGZyb20gJy4vYm9hcmQnXG5cbmV4cG9ydCBjb25zdCBub3VnaHRUZXh0ID0gJ25vdWdodCdcbmV4cG9ydCBjb25zdCBjcm9zc1RleHQgPSAnY3Jvc3MnXG5leHBvcnQgY29uc3Qgbm9ib2R5VGV4dCA9ICdub2JvZHknXG5cbmxldCBjdXJyZW50R2FtZU92ZXIgPSBmYWxzZVxubGV0IGN1cnJlbnRQbGF5ZXI6YW55ID0gdW5kZWZpbmVkXG5cbi8vIFRha2UgdGhlIHJvdyBhbmQgY29sdW1uIG51bWJlciBhbmQgdXBkYXRlIHRoZSBnYW1lIHN0YXRlLlxuZXhwb3J0IGZ1bmN0aW9uIHRha2VUdXJuKHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gIGN1cnJlbnRHYW1lT3ZlcjogYm9vbGVhbiwgY3VycmVudEJvYXJkOiBDZWxsW11bXSwgY3VycmVudFBsYXllcjogUGxheWVyKTogQ2VsbFtdW10ge1xuXG4gICAgaWYgKGN1cnJlbnRCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdICE9IG51bGwpe1xuICAgICAgcmV0dXJuIGN1cnJlbnRCb2FyZFxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmXG4gICAgKGN1cnJlbnRHYW1lT3ZlciA9PSBmYWxzZSl7IFxuICAgICAgY3VycmVudEJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPSBjdXJyZW50UGxheWVyXG4gICAgfVxuICBcbiAgY29uc29sZS5sb2coYHRha2VUdXJuIHdhcyBjYWxsZWQgd2l0aCByb3c6ICR7cm93SW5kZXh9LCBjb2x1bW46ICR7Y29sdW1uSW5kZXh9YCkgLy8ga2VlcCB0aGlzIGxpbmUgXG4gIHJldHVybiBjdXJyZW50Qm9hcmRcbiAgfVxuXG4vLyBTd2l0Y2hlcyBhbmQgc2V0cyBwbGF5ZXIgdG8gYWx0ZXJuYXRlIGJldHdlZW4gXCJub3VnaHRcIiBhbmQgXCJjcm9zc1wiXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGN1cnJlbnRQbGF5ZXI6IFBsYXllcik6IFBsYXllciB7XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gJ25vdWdodCcgfHwgY3VycmVudFBsYXllciA9PSB1bmRlZmluZWQpIHtcbiAgICBjdXJyZW50UGxheWVyID0gXCJjcm9zc1wiXG4gIH1cbiAgZWxzZSB7Y3VycmVudFBsYXllciA9IFwibm91Z2h0XCJ9XG5cbiAgY29uc29sZS5sb2coJ1N3aXRjaCBwbGF5ZXIgY2FsbGVkLiBDdXJyZW50IHBsYXllciBpcycsIGN1cnJlbnRQbGF5ZXIpXG5cbiAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcbn1cblxuLy8gUmV0dXJuIGVpdGhlciAnbm91Z2h0JywgJ2Nyb3NzJyBvciAnbm9ib2R5JyBpZiB0aGUgZ2FtZSBpcyBvdmVyLlxuLy8gT3RoZXJ3aXNlIHJldHVybiBudWxsIHRvIGNvbnRpbnVlIHBsYXlpbmcuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tXaW5uZXIoY3VycmVudEJvYXJkOiBDZWxsW11bXSk6IFBsYXllciB7XG5cbi8vY2hlY2sgcm93cyBhbmQgY29sdW1uc1xuZm9yIChsZXQgaSA9IDA7IGkgPHNldHRpbmdzLmJvYXJkUm93czsgaSsrKXtcblxuICAvL2NoZWNrIHJvdyBcbiAgaWYoY3VycmVudEJvYXJkW2ldLmV2ZXJ5KGNlbGwgPT4gY2VsbCA9PT0gY3VycmVudEJvYXJkW2ldWzBdJiYgY2VsbCAhPT0gbnVsbCkpe1xuICAgIHJldHVybiBjdXJyZW50Qm9hcmRbaV1bMF0gYXMgUGxheWVyXG4gIH1cbiAgIFxuIC8vIGNoZWNrIGNvbHVtbiBcbiAgbGV0IGNvbHVtbldpbiA9IHRydWU7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgc2V0dGluZ3MuYm9hcmRDb2xzOyBqKyspIHtcbiAgICAgIGlmIChjdXJyZW50Qm9hcmRbal1baV0gIT09IGN1cnJlbnRCb2FyZFswXVtpXSB8fCBjdXJyZW50Qm9hcmRbal1baV0gPT09IG51bGwpIHtcbiAgICAgICAgICBjb2x1bW5XaW4gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICBpZiAoY29sdW1uV2luKSB7XG4gICAgICByZXR1cm4gY3VycmVudEJvYXJkWzBdW2ldIGFzIFBsYXllclxuICB9XG59XG4gIFxuLy8gY2hlY2sgbWFpbiBkaWFnb25hbCB3aW5cbmxldCBtYWluRGlhZ29uYWxXaW4gPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmJvYXJkUm93czsgaSsrKSB7XG4gICAgICBpZiAoY3VycmVudEJvYXJkW2ldW2ldICE9PSBjdXJyZW50Qm9hcmRbMF1bMF0gfHwgY3VycmVudEJvYXJkW2ldW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgbWFpbkRpYWdvbmFsV2luID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gIGlmIChtYWluRGlhZ29uYWxXaW4pIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRCb2FyZFswXVswXSBhcyBQbGF5ZXI7XG4gIH1cblxuLy9jaGVjayBhbnRpLWRpYWdcbmxldCBhbnRpRGlhZ29uYWxXaW4gPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmJvYXJkUm93czsgaSsrKSB7XG4gICAgICBpZiAoY3VycmVudEJvYXJkW2ldW3NldHRpbmdzLmJvYXJkUm93cyAtIDEgLSBpXSAhPT0gY3VycmVudEJvYXJkWzBdW3NldHRpbmdzLmJvYXJkUm93cyAtIDFdIHx8IGN1cnJlbnRCb2FyZFtpXVtzZXR0aW5ncy5ib2FyZFJvd3MgLSAxIC0gaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBhbnRpRGlhZ29uYWxXaW4gPSBmYWxzZVxuICAgICAgICAgICBicmVha1xuICAgICAgfVxuICB9XG4gIGlmIChhbnRpRGlhZ29uYWxXaW4pIHtcbiAgICAgIHJldHVybiBjdXJyZW50Qm9hcmRbMF1bc2V0dGluZ3MuYm9hcmRSb3dzIC0gMV0gYXMgUGxheWVyO1xuICB9XG5cbi8vIGNoZWNrIGZvciBudWxsXG4gIGxldCBoYXNOdWxsVmFsdWVzID0gKGN1cnJlbnRCb2FyZDpDZWxsW11bXSk6Ym9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRCb2FyZC5zb21lKHJvdyA9PiByb3cuc29tZSAoY2VsbCA9PiBjZWxsID09PSBudWxsKSlcbiAgfVxuICBpZiAoaGFzTnVsbFZhbHVlcyhjdXJyZW50Qm9hcmQpID09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFwibm9ib2R5XCJcbiAgfVxuICBjb25zb2xlLmxvZyhcImNoZWNrV2lubmVyIHdhcyBjYWxsZWRcIilcbn1cblxuLy8gU2V0IHRoZSBnYW1lIHN0YXRlIGJhY2sgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIHRvIHBsYXkgYW5vdGhlciBnYW1lLlxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgc2V0Qm9hcmQoYm9hcmRCdWlsZGVyKCkpXG4gIGN1cnJlbnRQbGF5ZXIgPSBcImNyb3NzXCJcbiAgY29uc29sZS5sb2coJ3Jlc2V0R2FtZSB3YXMgY2FsbGVkJykgLy8ga2VlcCB0aGlzIGxpbmUgaGVyZVxufVxuXG4vLyBSZXR1cm4gdGhlIGN1cnJlbnQgcGxheWVyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpOiBQbGF5ZXIge1xuICByZXR1cm4gY3VycmVudFBsYXllclxufVxuXG4vLyBVcGRhdGUgY3VycmVudCBwbGF5ZXJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyKG5ld0N1cnJlbnRQbGF5ZXI6IFBsYXllcil7XG4gIGN1cnJlbnRQbGF5ZXIgPSBuZXdDdXJyZW50UGxheWVyXG59XG5cbi8vIFJldHVybiB0aGUgY3VycmVudCBnYW1lIHN0YXRlXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZU92ZXIoKTogYm9vbGVhbiB7IFxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gU2V0IHRoZSBjdXJyZW50IGdhbWUgc3RhdGVcbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lT3ZlcihuZXdHYW1lT3ZlcjogYm9vbGVhbikge31cbiIsICIvLyBUaGlzIGZpbGUgY29udGFpbnMgaGVscGVyIGNvZGUgYmV5b25kIHRoZSBmaXJzdCB3ZWVrICdJbnRybyB0byBKYXZhU2NyaXB0JyBjb3Vyc2UgY29udGVudC5cbi8vIFlvdSBzaG91bGQgbm90IGhhdmUgdG8gbWFrZSBhbnkgY2hhbmdlcyBpbiB0aGlzIGZpbGUgdG8gZ2V0IHlvdXIgZ2FtZSB3b3JraW5nLlxuXG5pbXBvcnQgeyBQbGF5ZXIsIENlbGwsIGdldEJvYXJkLCBzZXRCb2FyZCwgZHJhd0JvYXJkLCBzZXR0aW5ncywgYm9hcmRCdWlsZGVyIH0gZnJvbSAnLi9ib2FyZCdcblxuaW1wb3J0IHsgY2hlY2tXaW5uZXIsIGNyb3NzVGV4dCwgZ2V0Q3VycmVudFBsYXllciwgZ2V0R2FtZU92ZXIsIG5vdWdodFRleHQsIHJlc2V0R2FtZSwgc2V0Q3VycmVudFBsYXllciwgc3dpdGNoUGxheWVyLCB0YWtlVHVybiwgbm9ib2R5VGV4dCB9IGZyb20gJy4vYWNhZGVteSdcblxuY29uc3Qgd2lubmVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXItbmFtZScpIVxuY29uc3Qgd2lubmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXItZGlzcGxheScpIVxuY29uc3QgdmFsaWRDZWxsVmFsdWVzOiBDZWxsW10gPSBbbm91Z2h0VGV4dCwgY3Jvc3NUZXh0LCBudWxsXVxuY29uc3QgdmFsaWRXaW5WYWx1ZXM6IENlbGxbXSA9IFtub3VnaHRUZXh0LCBjcm9zc1RleHQsIG5vYm9keVRleHRdXG5cbi8vIENyZWF0ZSBib2FyZFxuZHJhd0JvYXJkKCk7XG5cbi8vIENsZWFyIGRvd24gdGhlIGVsZW1lbnRzIGRyYXduIG9uIHRoZSBib2FyZC5cbmZ1bmN0aW9uIGNsZWFySHRtbEdyaWQoKSB7XG4gIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBzZXR0aW5ncy5ib2FyZENvbHM7IGNvbHVtbkluZGV4Kyspe1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBzZXR0aW5ncy5ib2FyZFJvd3M7IHJvd0luZGV4KyspIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3ctJHtyb3dJbmRleH0tY29sdW1uLSR7Y29sdW1uSW5kZXh9YCkhLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVIdG1sR3JpZFdpdGhCb2FyZFN0YXRlKGJvYXJkOiBDZWxsW11bXSkge1xuICBjb25zb2xlLmxvZygncG9wdWxhdGVIdG1sR3JpZFdpdGhCb2FyZFN0YXRlIHdhcyBjYWxsZWQgd2l0aCcsIGJvYXJkKVxuICBcbiAgY2xlYXJIdG1sR3JpZCgpXG4gIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBzZXR0aW5ncy5ib2FyZENvbHM7IGNvbHVtbkluZGV4Kyspe1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBzZXR0aW5ncy5ib2FyZFJvd3M7IHJvd0luZGV4KyspIHtcbiAgICAgIGlmICghYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3QgY2VsbFRleHQgPSBib2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdID09PSBub3VnaHRUZXh0ID8gJ1x1MkI1NScgOiAnXHUyNzRDJ1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdy0ke3Jvd0luZGV4fS1jb2x1bW4tJHtjb2x1bW5JbmRleH1gKSEuaW5uZXJUZXh0ID0gY2VsbFRleHRcbiAgICB9XG4gIH1cbn1cbi8vY29ubmVjdCBmb3VyIGhhcyBzaXggcm93c1xuZnVuY3Rpb24gaXNWYWxpZFJvdyhhcnJheU9mQ2VsbHM6IENlbGxbXSkge1xuICBsZXQgcmVzdWx0ID0gQXJyYXkuaXNBcnJheShhcnJheU9mQ2VsbHMpICYmIGFycmF5T2ZDZWxscy5sZW5ndGggPT09IHNldHRpbmdzLmJvYXJkUm93c1xuICAvL2NvbnNvbGUubG9nKGBpc1ZhbGlkUm93ID09ICR7cmVzdWx0fWApXG4gIC8vY29uc29sZS5sb2coYGxlbmd0aCA9PSAke2FycmF5T2ZDZWxscy5sZW5ndGh9IGFuZCBib2FyZCB3aXRoIHJvd3MgPT0gJHtzZXR0aW5ncy5ib2FyZFJvd3N9YClcbiAgcmV0dXJuIHJlc3VsdFxufVxuLy9jb25uZWN0IGZvdXIgaGFzIHNldmVuIGNvbHNcblxuZnVuY3Rpb24gaXNWYWxpZENvbHVtbihjb2x1bW5BcnJheTogQ2VsbFtdKSB7XG5cbiAgZnVuY3Rpb24gdHJhbnNwb3NlQXJyYXkoYXJyYXk6IENlbGxbXVtdKTogQ2VsbFtdW10ge1xuICAgIC8vaW5pdGlhbGlzZWQgMmQgYXJyYXkgd2l0aCBzd2FwcGVkIGRpbWVuc2lvblxuICAgIGxldCB0cmFuc3Bvc2VkOiBDZWxsW11bXSA9IFtdO1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHJvd3Mgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0cmFuc3Bvc2VkW2ldID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAvLyBBc3NpZ24gdGhlIHZhbHVlIHRvIHRoZSB0cmFuc3Bvc2VkIGFycmF5XG4gICAgICAgICAgICAgIHRyYW5zcG9zZWRbaV1bal0gPSBhcnJheVtqXVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICByZXR1cm4gdHJhbnNwb3NlZFxuICAgICAgICB9XG5cbiAgbGV0IHRyYW5zcG9zZWQgPSB0cmFuc3Bvc2VBcnJheShnZXRCb2FyZCgpKVxuXG4gIGNvbnNvbGUubG9nKHRyYW5zcG9zZWQpXG4gIGNvbnNvbGUubG9nKGB0cmFuc3Bvc2VkIGFycmF5IGhhcyBsZW5ndGggb2Y6ICR7dHJhbnNwb3NlZFswXS5sZW5ndGh9YClcbiAgY29uc29sZS5sb2coc2V0dGluZ3MuYm9hcmRDb2xzKVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGNvbHVtbkFycmF5KSAmJiB0cmFuc3Bvc2VkWzBdLmxlbmd0aCA9PT0gc2V0dGluZ3MuYm9hcmRDb2xzXG4gICAgICAgICYmIGNvbHVtbkFycmF5LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7cmV0dXJuIHZhbGlkQ2VsbFZhbHVlcy5pbmNsdWRlcyhpdGVtKX0pXG59XG5cbi8vIEEgZ3JpZCBwb3NpdGlvbiB3YXMgY2xpY2tlZCBjYWxsIHRoZSBnYW1lJ3MgdHVybiBmdW5jdGlvbiwgcmVkcmF3IGFuZCB0aGVuIGNoZWNrIGZvciBhIHdpbm5lci5cblxuZnVuY3Rpb24gcG9zaXRpb25DbGljayhyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpIHtcbiAgY29uc29sZS5sb2coYHBvc2l0aW9uQ2xpY2sgd2FzIGNhbGxlZCB3aXRoIHJvd0luZGV4PSR7cm93fSwgY29sdW1uSW5kZXg9JHtjb2x1bW59LGApXG4gIC8vcm93LCBjb2x1bW4sIGN1cnJlbnRHYW1lT3ZlciwgY3VycmVudEJvYXJkLCBjdXJyZW50UGxheWVyXG4gIGNvbnN0IGJvYXJkID0gdGFrZVR1cm4ocm93LCBjb2x1bW4sIGdldEdhbWVPdmVyKCksIGdldEJvYXJkKCksIGdldEN1cnJlbnRQbGF5ZXIoKSlcbiAgc2V0Qm9hcmQoYm9hcmQpXG4gIHNldEN1cnJlbnRQbGF5ZXIoc3dpdGNoUGxheWVyKGdldEN1cnJlbnRQbGF5ZXIoKSkpXG5cblxuICBpZiAoIWlzVmFsaWRSb3coYm9hcmRbMF0pIHx8ICFib2FyZC5ldmVyeShpc1ZhbGlkQ29sdW1uKSkge1xuICAgIHRocm93IGBFeHBlY3RpbmcgXCJnZXRCb2FyZFwiIHRvIHJldHVybiBhIDJkIGFycmF5IHdoZXJlIGFsbCB2YWx1ZXMgYXJlIG9uZSBvZiB0aGUgc3RyaW5ncyAke3ZhbGlkQ2VsbFZhbHVlc30uIEFjdHVhbGx5IHJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KGJvYXJkKX1gXG4gIH1cblxuXG4gIHBvcHVsYXRlSHRtbEdyaWRXaXRoQm9hcmRTdGF0ZShib2FyZClcbiAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW5uZXIoYm9hcmQpXG4gIGlmICh3aW5uZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbm5lciAhPT0gJ3N0cmluZycgfHwgIXZhbGlkV2luVmFsdWVzLmluY2x1ZGVzKHdpbm5lcikpIHtcbiAgICAgIHRocm93IGBFeHBlY3RpbmcgXCJjaGVja1dpbm5lclwiIHRvIHJldHVybiBudWxsIG9yIG9uZSBvZiB0aGUgc3RyaW5ncyAke3ZhbGlkV2luVmFsdWVzfS4gQWN0dWFsbHkgcmVjZWl2ZWQ6ICR7d2lubmVyfWBcbiAgICB9XG4gICAgd2lubmVyTmFtZS5pbm5lclRleHQgPSB3aW5uZXJcbiAgICB3aW5uZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbn1cblxuLy8gVGhlIHJlc2V0IGJ1dHRvbiB3YXMgY2xpY2tlZCwgY2FsbCB0aGUgZ2FtZSdzIHJlc2V0IGZ1bmN0aW9uIHRoZW4gcmVzZXQgdGhlIERPTS5cbmZ1bmN0aW9uIHJlc2V0Q2xpY2soZXZlbnQ6IGFueSkge1xuICByZXNldEdhbWUoKVxuICB3aW5uZXJOYW1lLmlubmVyVGV4dCA9ICcnXG4gIHdpbm5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdOb25lJ1xuICBjbGVhckh0bWxHcmlkKClcbn1cblxuLy8gQmluZCB0aGUgY2xpY2sgZXZlbnRzIGZvciB0aGUgZ3JpZC5cbmZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBzZXR0aW5ncy5ib2FyZFJvd3M7IHJvd0luZGV4KyspIHtcbiAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IHNldHRpbmdzLmJvYXJkQ29sczsgY29sdW1uSW5kZXgrKykge1xuICAgIGNvbnN0IGdyaWRQb3NpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3ctJHtyb3dJbmRleH0tY29sdW1uLSR7Y29sdW1uSW5kZXh9YCkhXG4gICAgZ3JpZFBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zaXRpb25DbGljay5iaW5kKG51bGwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCkpXG4gIH1cbn1cblxuLy8gQmluZCB0aGUgY2xpY2sgZXZlbnQgZm9yIHRoZSByZXNldCBidXR0b24uXG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKSFcbnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRDbGljaylcblxuLy8gaW5pdGlhbGlzZSB0aGUgc3RhdGVcbnJlc2V0R2FtZSgpXG4iXSwKICAibWFwcGluZ3MiOiAibUJBS08sSUFBTUEsRUFBTixLQUFjLENBQWQsY0FDTCxlQUFpQixFQUNqQixlQUFpQixFQUNuQixFQUVhQyxFQUFXLElBQUlELEVBSXhCRSxFQUFnQixDQUFDLEVBQ3BCLFFBQVFDLEVBQU0sRUFBR0EsRUFBTUYsRUFBUyxVQUFXRSxJQUFNLENBQ2hELElBQUlBLEVBQWEsQ0FBQyxFQUNsQixRQUFRQyxFQUFNLEVBQUdBLEVBQUtILEVBQVMsVUFBV0csSUFDeENELEVBQUlDLEdBQU8sS0FFYkYsRUFB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Q3BDLElBQU1zQixFQUFTQyxFQUFZdkIsQ0FBSyxFQUNoQyxHQUFJc0IsRUFBUSxDQUNWLEdBQUksT0FBT0EsR0FBVyxVQUFZLENBQUM5QixFQUFlLFNBQVM4QixDQUFNLEVBQy9ELEtBQU0sZ0VBQWdFOUIseUJBQXNDOEIsSUFFOUduQyxFQUFXLFVBQVltQyxFQUN2QmxDLEVBQWMsTUFBTSxRQUFVLE9BQ2hDLENBQ0YsQ0FHQSxTQUFTb0MsRUFBV0MsRUFBWSxDQUM5QkMsRUFBVSxFQUNWdkMsRUFBVyxVQUFZLEdBQ3ZCQyxFQUFjLE1BQU0sUUFBVSxPQUM5Qk8sRUFBYyxDQUNoQixDQUdBLFFBQVNHLEVBQVcsRUFBR0EsRUFBV0QsRUFBUyxVQUFXQyxJQUNwRCxRQUFTRixFQUFjLEVBQUdBLEVBQWNDLEVBQVMsVUFBV0QsSUFDckMsU0FBUyxlQUFlLE9BQU9FLFlBQW1CRixHQUFhLEVBQ3ZFLGlCQUFpQixRQUFTaUIsRUFBYyxLQUFLLEtBQU1mLEVBQVVGLENBQVcsQ0FBQyxFQUsxRixJQUFNK0IsRUFBYyxTQUFTLGVBQWUsY0FBYyxFQUMxREEsRUFBWSxpQkFBaUIsUUFBU0gsQ0FBVSxFQUdoREUsRUFBVSIsCiAgIm5hbWVzIjogWyJTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJib2FyZCIsICJjb2wiLCAicm93IiwgImJvYXJkQnVpbGRlciIsICJnZXRCb2FyZCIsICJzZXRCb2FyZCIsICJuZXdCb2FyZCIsICJkcmF3Qm9hcmQiLCAiZ3JpZCIsICJyb3dFbGVtZW50IiwgImNvbHVtbiIsICJjb2x1bW5FbGVtZW50IiwgIm5vdWdodFRleHQiLCAiY3Jvc3NUZXh0IiwgIm5vYm9keVRleHQiLCAiY3VycmVudFBsYXllciIsICJ0YWtlVHVybiIsICJyb3dJbmRleCIsICJjb2x1bW5JbmRleCIsICJjdXJyZW50R2FtZU92ZXIiLCAiY3VycmVudEJvYXJkIiwgInN3aXRjaFBsYXllciIsICJjaGVja1dpbm5lciIsICJpIiwgInNldHRpbmdzIiwgImNlbGwiLCAiY29sdW1uV2luIiwgImoiLCAibWFpbkRpYWdvbmFsV2luIiwgImFudGlEaWFnb25hbFdpbiIsICJyb3ciLCAicmVzZXRHYW1lIiwgInNldEJvYXJkIiwgImJvYXJkQnVpbGRlciIsICJnZXRDdXJyZW50UGxheWVyIiwgInNldEN1cnJlbnRQbGF5ZXIiLCAibmV3Q3VycmVudFBsYXllciIsICJnZXRHYW1lT3ZlciIsICJ3aW5uZXJOYW1lIiwgIndpbm5lckRpc3BsYXkiLCAidmFsaWRDZWxsVmFsdWVzIiwgIm5vdWdodFRleHQiLCAiY3Jvc3NUZXh0IiwgInZhbGlkV2luVmFsdWVzIiwgIm5vYm9keVRleHQiLCAiZHJhd0JvYXJkIiwgImNsZWFySHRtbEdyaWQiLCAiY29sdW1uSW5kZXgiLCAic2V0dGluZ3MiLCAicm93SW5kZXgiLCAicG9wdWxhdGVIdG1sR3JpZFdpdGhCb2FyZFN0YXRlIiwgImJvYXJkIiwgImNlbGxUZXh0IiwgImlzVmFsaWRSb3ciLCAiYXJyYXlPZkNlbGxzIiwgImlzVmFsaWRDb2x1bW4iLCAiY29sdW1uQXJyYXkiLCAidHJhbnNwb3NlQXJyYXkiLCAiYXJyYXkiLCAidHJhbnNwb3NlZCIsICJpIiwgImoiLCAiZ2V0Qm9hcmQiLCAiaXRlbSIsICJwb3NpdGlvbkNsaWNrIiwgInJvdyIsICJjb2x1bW4iLCAidGFrZVR1cm4iLCAiZ2V0R2FtZU92ZXIiLCAiZ2V0Q3VycmVudFBsYXllciIsICJzZXRCb2FyZCIsICJzZXRDdXJyZW50UGxheWVyIiwgInN3aXRjaFBsYXllciIsICJ3aW5uZXIiLCAiY2hlY2tXaW5uZXIiLCAicmVzZXRDbGljayIsICJldmVudCIsICJyZXNldEdhbWUiLCAicmVzZXRCdXR0b24iXQp9Cg==
