
function id( el ){
	return document.getElementById( el );
}

function gup( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}
window.onload = function(){
    
id('idCampoACR').innerHTML = gup('CampoACR').replace(/[+]/g,' ');;
id('idCampoTaxaHidrica').innerHTML = gup('CampoTaxaHidrica').replace(/[+]/g,' ');;
id('idCampoVIG').innerHTML = gup('CampoVIG').replace(/[+]/g,' ');;
id('idCampoSodio').innerHTML = gup('CampoSodio').replace(/[+]/g,' ');;
id('idCampoPotassio').innerHTML = gup('CampoPotassio').replace(/[+]/g,' ');;
id('idCampoCalcio').innerHTML = gup('CampoCalcio').replace(/[+]/g,' ');;
id('idCampoMagnesio').innerHTML = gup('CampoMagnesio').replace(/[+]/g,' ');;
id('idCampoApresentacaoSolucaoA').innerHTML = gup('CampoApresentacaoSolucaoA').replace(/[+]/g,' ');;
id('idCampoApresentacaoSolucaoB').innerHTML = gup('CampoApresentacaoSolucaoB').replace(/[+]/g,' ');;   
id('idCampoApresentacaoNaCl').innerHTML = gup('CampoApresentacaoNaCl').replace(/[+]/g,' ');;
id('idCampoApresentacaoKCl').innerHTML = gup('CampoApresentacaoKCl').replace(/[+]/g,' ');;                                                
id('idCampoApresentacaoMagnesio').innerHTML = gup('CampoApresentacaoMagnesio').replace(/[+]/g,' ');;
id('idCampoApresentacaoCalcio').innerHTML = gup('CampoApresentacaoCalcio').replace(/[+]/g,' ');;
id('idCampoVolumeSolucaoA').innerHTML = gup('CampoVolumeSolucaoA').replace(/[+]/g,' ');;
id('idCampoVolumeSolucaoB').innerHTML = gup('CampoVolumeSolucaoB').replace(/[+]/g,' ');;
id('idCampoVolumeNaCl').innerHTML = gup('CampoVolumeNaCl').replace(/[+]/g,' ');;
id('idCampoVolumeKCl').innerHTML = gup('CampoVolumeKCl').replace(/[+]/g,' ');;
id('idCampoVolumeCalcio').innerHTML = gup('CampoVolumeCalcio').replace(/[+]/g,' ');;
id('idCampoVolumeMagnesio').innerHTML = gup('CampoVolumeMagnesio').replace(/[+]/g,' ');;
id('idCampoOsmolaridade').innerHTML = gup('CampoOsmolaridade').replace(/[+]/g,' ');;
id('idCampoVolumeTotal').innerHTML = gup('CampoVolumeTotal').replace(/[+]/g,' ');;
id('idCampoVelocidade').innerHTML = gup('CampoVelocidade').replace(/[+]/g,' ');;
}


  
function cont(){
   var conteudo = document.getElementById('print').innerHTML;
   tela_impressao = window.open('about:blank');
   tela_impressao.document.write(conteudo);
   tela_impressao.window.print();
   tela_impressao.window.close();
}

  