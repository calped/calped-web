function calcula(form) {
    var VT = eval(form.CampoTaxaHidrica.value) * eval(form.CampoPeso.value);
    form.CampoVolumeTotal.value = VT.toFixed(1);
    
    var velocidade = VT / 24;
    form.CampoVelocidade.value = velocidade.toFixed(1);
    
    var gglic = eval(form.CampoPeso.value) * eval(form.CampoVIG.value) * 1.44;
    var calGlic = gglic * 3.4;
    form.CampoCaloriasTotais.value = calGlic.toFixed(1);
    
    var ACR = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) * 144) / VT;
    form.CampoACR.value = ACR.toFixed(1);
    
    var mEqTotalNa = eval(form.CampoSodio.value) * eval(form.CampoPeso.value);
    var mEqTotalK = eval(form.CampoPotassio.value) * eval(form.CampoPeso.value);
    var mEqTotalMg = eval(form.CampoMagnesio.value) * eval(form.CampoPeso.value);

    var mlKCl;
    switch (document.getElementById("idSelectKCl").value) {
        case "10":
            mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value)) / 1.34;
            form.CampoApresentacaoKCl.value = "10";
            break;
        case "15":
            mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value)) / 2;
            form.CampoApresentacaoKCl.value = "15";
            break;
        case "19.1":
            mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value)) / 2.5;
            form.CampoApresentacaoKCl.value = "19.1";
            break;
        case "20":
            mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value)) / 2.68;
            form.CampoApresentacaoKCl.value = "20";
            break;
        default:
            alert("Valor inexistente");
    }
    form.CampoVolumeKCl.value = mlKCl.toFixed(1);

    var mlNaCl;
    switch (document.getElementById("idSelectNaCl").value) {
        case "10":
            mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value)) / 1.7;
            form.CampoApresentacaoNaCl.value = "10";
            break;
        case "17.5":
            mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value)) / 3;
            form.CampoApresentacaoNaCl.value = "17.5";
            break;
        case "20":
            mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value)) / 3.3;
            form.CampoApresentacaoNaCl.value = "20";
            break;
        default:
            alert("Valor inexistente");
    }
    form.CampoVolumeNaCl.value = mlNaCl.toFixed(1);

    var mlMgSO4;
    switch (document.getElementById("idSelectMgSO4").value) {
        case "10":
            mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value)) / 0.8;
            form.CampoApresentacaoMagnesio.value = "10";
            break;
        case "20":
            mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value)) / 1.6;
            form.CampoApresentacaoMagnesio.value = "20";
            break;
        case "50":
            mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value)) / 4;
            form.CampoApresentacaoMagnesio.value = "50";
            break;
        default:
            alert("Valor inexistente");
    }
    form.CampoVolumeMagnesio.value = mlMgSO4.toFixed(1);

    var mlCalcio;
    switch (document.getElementById("idSelectCalcio").value) {
        case "Gluconato":
            mlCalcio = (eval(form.CampoPeso.value) * eval(form.CampoCalcio.value)) / 100;
            form.CampoApresentacaoCalcio.value = "Gluconato de Calcio 10";
            break;
        case "Cloreto":
            mlCalcio = (eval(form.CampoPeso.value) * eval(form.CampoCalcio.value)) / 300;
            form.CampoApresentacaoCalcio.value = "Cloreto de Calcio 10";
            break;
        default:
            alert("Valor inexistente");
    }
    form.CampoVolumeCalcio.value = mlCalcio.toFixed(1);

    var volumesobra = VT - (parseFloat(form.CampoVolumeNaCl.value) + parseFloat(form.CampoVolumeKCl.value) + parseFloat(form.CampoVolumeCalcio.value) + parseFloat(form.CampoVolumeMagnesio.value));
    var ACF = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) * 144) / volumesobra;

    var dif5 = Math.abs(ACF - 5);
    var dif10 = Math.abs(10 - ACF);
    var dif25 = Math.abs(25 - ACF);
    var dif50 = Math.abs(50 - ACF);
    var Sdif510 = dif5 + dif10;
    var Sdif525 = dif5 + dif25;
    var Sdif550 = dif5 + dif50;

    var mlGlicose5a = (volumesobra / Sdif510) * dif10;
    var mlGlicose5b = (volumesobra / Sdif525) * dif25;
    var mlGlicose5c = (volumesobra / Sdif550) * dif50;
    var mlGlicose10 = (volumesobra / Sdif510) * dif5;
    var mlGlicose25 = (volumesobra / Sdif525) * dif5;
    var mlGlicose50 = (volumesobra / Sdif550) * dif5;

    form.CampoVolumeSolucaoA.value = mlGlicose5a.toFixed(1);
    form.CampoVolumeSolucaoB.value = mlGlicose10.toFixed(1);

    if (ACF < 5) {
        var dif0 = Math.abs(ACF - 0);
        var dif5a = Math.abs(5 - ACF);
        var Sdif05 = dif0 + dif5a;

        var mlABD = (volumesobra / Sdif05) * dif5a;
        var mlGlicose5d = (volumesobra / Sdif05) * dif0;

        form.CampoVolumeSolucaoA.value = mlABD.toFixed(1);
        form.CampoVolumeSolucaoB.value = mlGlicose5d.toFixed(1);
    }

    if (ACF > 26) {
        form.CampoVolumeSolucaoA.value = 0;
        form.CampoVolumeSolucaoB.value = 0;
        alert("Concentração de glicose muito alta, impossibilitado de calcular!");
        form.CampoVIG.value = "5";
    }

    var osm = (((gglic * 5.5) + (mEqTotalNa + mEqTotalK + mEqTotalMg)) / VT) * 1000;
    form.CampoOsmolaridade.value = osm.toFixed(0);

    if (osm > 600) {
        alert("Osmolaridade alta, recomendado um acesso vascular central!");
    }
}
