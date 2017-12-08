describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
    it('les 3 parametres doivent etre du bon type', function() {
		
		expect(convertisseur(2, 2, 'EUR')).toBe(null);
		expect(convertisseur('USD', 2, 5)).toBe(null);
		expect(convertisseur('ZZZ', 2, 'EUR')).toBe(null);
		expect(convertisseur('NZD', 2, 'FTG')).toBe(null);
		
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function() {
		
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
		
		
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
		
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
		
    });

    it('ne doit pas convertir des mauvais montants', function() {
		
		expect(convertisseur('USD', -2, 'EUR')).toBe(null);
		
    });

});