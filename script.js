function GeraQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartApi = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=';
    var conteudoQRcode = GoogleChartApi+inputUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRcode


}