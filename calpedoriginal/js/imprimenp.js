
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
 
  
    
 id('idCampoTHO').innerHTML = gup('CampoTHO').replace(/[+]/g,' ');;
id('idCampoTHM').innerHTML = gup('CampoTHM').replace(/[+]/g,' ');;   
id('idCampoTaxaHidricaTotal').innerHTML = gup('CampoTaxaHidricaTotal').replace(/[+]/g,' ');; 
 
id('idCampoFCSodio').innerHTML = gup('CampoFCSodio').replace(/[+]/g,' ');;
id('idCampoFCPotassio').innerHTML = gup('CampoFCPotassio').replace(/[+]/g,' ');;  
id('idCampoFCCalcio').innerHTML = gup('CampoFCCalcio').replace(/[+]/g,' ');;
id('idCampoFCMagnesio').innerHTML = gup('CampoFCMagnesio').replace(/[+]/g,' ');;
id('idCampoFCFosforo').innerHTML = gup('CampoFCFosforo').replace(/[+]/g,' ');;    
id('idCampoFCOligoelementos').innerHTML = gup('CampoFCOligoelementos').replace(/[+]/g,' ');;
id('idCampoFCVitaminas').innerHTML = gup('CampoFCVitaminas').replace(/[+]/g,' ');;
    
    
id('idCampoFCSolucaoA').innerHTML = gup('CampoFCSolucaoA').replace(/[+]/g,' ');;
id('idCampoFCSolucaoB').innerHTML = gup('CampoFCSolucaoB').replace(/[+]/g,' ');;    
id('idCampoFC').innerHTML = gup('CampoFC').replace(/[+]/g,' ');; 
 id('idCampoFCAminoacidos').innerHTML = gup('CampoFCAminoacidos').replace(/[+]/g,' ');; 
id('idCampoFCLipidios').innerHTML = gup('CampoFCLipidios').replace(/[+]/g,' ');; 
id('idCampoApresentacaoAminoacidos').innerHTML = gup('CampoApresentacaoAminoacidos').replace(/[+]/g,' ');;
id('idCampoVolumeAminoacidos').innerHTML = gup('CampoVolumeAminoacidos').replace(/[+]/g,' ');;
id('idCampoApresentacaoLipidios').innerHTML = gup('CampoApresentacaoLipidios').replace(/[+]/g,' ');;
id('idCampoVolumeLipidios').innerHTML = gup('CampoVolumeLipidios').replace(/[+]/g,' ');;
id('idCampoFosforo').innerHTML = gup('CampoFosforo').replace(/[+]/g,' ');;
id('idCampoApresentacaoFosforo').innerHTML = gup('CampoApresentacaoFosforo').replace(/[+]/g,' ');;
id('idCampoVolumeFosforo').innerHTML = gup('CampoVolumeFosforo').replace(/[+]/g,' ');;  
id('idCampoACR').innerHTML = gup('CampoACR').replace(/[+]/g,' ');;
id('idCampoTaxaHidrica').innerHTML = gup('CampoTaxaHidrica').replace(/[+]/g,' ');;
id('idCampoVIG').innerHTML = gup('CampoVIG').replace(/[+]/g,' ');;
id('idCampoSodio').innerHTML = gup('CampoSodio').replace(/[+]/g,' ');;
id('idCampoPotassio').innerHTML = gup('CampoPotassio').replace(/[+]/g,' ');;
id('idCampoCalcio').innerHTML = gup('CampoCalcio').replace(/[+]/g,' ');;
id('idCampoMagnesio').innerHTML = gup('CampoMagnesio').replace(/[+]/g,' ');;
    
        id('idCampoOligoelementos').innerHTML = gup('CampoOligoelementos').replace(/[+]/g,' ');;
    id('idCampoApresentacaoOligoelementos').innerHTML = gup('CampoApresentacaoOligoelementos').replace(/[+]/g,' ');;
    id('idCampoVolumeOligoelementos').innerHTML = gup('CampoVolumeOligoelementos').replace(/[+]/g,' ');;
    
            id('idCampoVitaminas').innerHTML = gup('CampoVitaminas').replace(/[+]/g,' ');;
    id('idCampoApresentacaoVitaminas').innerHTML = gup('CampoApresentacaoVitaminas').replace(/[+]/g,' ');;
    id('idCampoVolumeVitaminas').innerHTML = gup('CampoVolumeVitaminas').replace(/[+]/g,' ');;
    
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
    
    id('idCampoCaloriasTotais').innerHTML = gup('CampoCaloriasTotais').replace(/[+]/g,' ');;
}


  
function cont(){
   var conteudo = document.getElementById('print').innerHTML;
//   tela_impressao = window.open('about:blank');
tela_impressao = window.open('calped.com.br');
   tela_impressao.document.write(conteudo);
    
   tela_impressao.window.print();
   tela_impressao.window.close();
}

  