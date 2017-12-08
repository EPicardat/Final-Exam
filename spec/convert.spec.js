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
	    	expect(convertisseur('USD', 1, 'EUR')).toBeCloseTo(0.84);
        expect(convertisseur('USD', 1, 'NZD')).toBeCloseTo(1.45);
        expect(convertisseur('USD', 1, 'KRW')).toBeCloseTo(1086);
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
	    	expect(convertisseur('EUR', 1, 'USD')).toBeCloseTo(1/0.84);
        expect(convertisseur('EUR', 1, 'NZD')).toBeCloseTo(1/0.84*1.45);
        expect(convertisseur('EUR', 1, 'KRW')).toBeCloseTo(1/0.84*1086);
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
	    	expect(convertisseur('KRW', 1, 'EUR')).toBeCloseTo(1/1086*0.84);
        expect(convertisseur('KRW', 1, 'NZD')).toBeCloseTo(1/1086*1.45);
        expect(convertisseur('KRW', 1, 'USD')).toBeCloseTo(1/1086);
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
	    	expect(convertisseur('NZD', 1, 'EUR')).toBeCloseTo(1/1.45*0.84);
        expect(convertisseur('NZD', 1, 'USD')).toBeCloseTo(1/1.45);
        expect(convertisseur('NZD', 1, 'KRW')).toBeCloseTo(1/1.45*1086);
    });

    it('ne doit pas convertir des mauvais montants', function() {
	    	expect(convertisseur('USD', -2, 'EUR')).toBe(null);		
    });

});