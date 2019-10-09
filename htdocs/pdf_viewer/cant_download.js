document.addEventListener('DOMContentLoaded', function(){
  window.PDFViewerApplication.download = function(){
    console.count("ダウンロード禁止");
  }
}, true);