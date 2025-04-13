var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_cadastre1815A_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'cadastre 1815 A<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/cadastre1815A_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [368893.067236, 5423486.257491, 369404.429693, 5423913.216809]
        })
    });
var lyr_cadastre1815_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'cadastre 1815<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/cadastre1815_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [368486.500869, 5423464.321389, 369394.936522, 5424247.379078]
        })
    });
var lyr_Cadastre1817_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cadastre-1817<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cadastre1817_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [369224.955303, 5423466.513163, 369646.623099, 5423834.378302]
        })
    });
var lyr_Cadastre1966_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cadastre 1966<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cadastre1966_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [369226.223195, 5423473.522466, 369623.399767, 5423818.405605]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_cadastre1815A_1.setVisible(true);lyr_cadastre1815_2.setVisible(true);lyr_Cadastre1817_3.setVisible(true);lyr_Cadastre1966_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cadastre1815A_1,lyr_cadastre1815_2,lyr_Cadastre1817_3,lyr_Cadastre1966_4];
