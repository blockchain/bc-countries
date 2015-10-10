'use strict';

describe('bcCountries.getIso2CodeByDigits(digits)', function () {

  it('should return country code when given an exact dial code', function () {
    expect(bcCountries.getIso2CodeByDigits('966')).toEqual('sa');
    expect(bcCountries.getIso2CodeByDigits('44')).toEqual('gb');

    expect(bcCountries.getIso2CodeByDigits('1684')).toEqual('as');
    expect(bcCountries.getIso2CodeByDigits('1')).toEqual('us');
  });

  it('should return country code when given digits that start with the dial code', function () {
    expect(bcCountries.getIso2CodeByDigits('9665124478564')).toEqual('sa');
    expect(bcCountries.getIso2CodeByDigits('44452218321')).toEqual('gb');
    expect(bcCountries.getIso2CodeByDigits('16842178')).toEqual('as');
    expect(bcCountries.getIso2CodeByDigits('14455')).toEqual('us');
  });

  it('should return an empty string when given digits that do not start with a dial code', function () {
    expect(bcCountries.getIso2CodeByDigits('99999')).toEqual('');
    expect(bcCountries.getIso2CodeByDigits('044')).toEqual('');
  });
});

describe('bcCountries.getDialCodeByDigits(digits)', function () {

  it('should return dial code when given an exact dial code', function () {
    expect(bcCountries.getDialCodeByDigits('966')).toEqual('966');
    expect(bcCountries.getDialCodeByDigits('44')).toEqual('44');

    expect(bcCountries.getDialCodeByDigits('1684')).toEqual('1684');
    expect(bcCountries.getDialCodeByDigits('1')).toEqual('1');
  });

  it('should return dial code when given digits that start with the dial code', function () {
    expect(bcCountries.getDialCodeByDigits('9665124478564')).toEqual('966');
    expect(bcCountries.getDialCodeByDigits('44452218321')).toEqual('44');
    expect(bcCountries.getDialCodeByDigits('16842178')).toEqual('1684');
    expect(bcCountries.getDialCodeByDigits('14455')).toEqual('1');
  });

  it('should return an empty string when given digits that do not start with a dial code', function () {
    expect(bcCountries.getDialCodeByDigits('99999')).toEqual('');
    expect(bcCountries.getDialCodeByDigits('044')).toEqual('');
  });
});

describe('bcCountries.getCountryByIso2Code(iso2Code)', function () {

  it('should return null when the code is unknown', function () {
    expect(bcCountries.getCountryByIso2Code('abc')).toBe(null);
    expect(bcCountries.getCountryByIso2Code('def')).toBe(null);
  });

  it('should return the correct fields', function () {
    expect(bcCountries.getCountryByIso2Code('gb')).toEqual({dialCode: '44', iso2Code: 'gb', name: 'United Kingdom'});
    expect(bcCountries.getCountryByIso2Code('us')).toEqual({dialCode: '1', iso2Code: 'us', name: 'United States'});
  });
});

describe('bcCountries.getAllCountries()', function () {

  it('should have 242 elements', function () {
    expect(bcCountries.getAllCountries().length).toEqual(242);
  });

  it('should returns the correct fields', function () {
    expect(bcCountries.getAllCountries()[3]).toEqual({dialCode: '1684', iso2Code: 'as', name: 'American Samoa'});
    expect(bcCountries.getAllCountries()[4]).toEqual({dialCode: '376', iso2Code: 'ad', name: 'Andorra'});
  });
});
