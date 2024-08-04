/* eslint-disable max-len */
export default {
	User: {
		getSuccess: 'Kullanıcı başarıyla alındı',
		getAllSuccess: 'Kullanıcılar başarıyla alındı',
		notFound: 'Kullanıcı bulunamadı',
		createSuccess: 'Kullanıcı başarıyla oluşturuldu',
	},
	Joi: {
		'any.required': '{{#label}} gerekli',
		'array.base': '{{#label}} bir dizi olmalı',
		'array.length': '{{#label}} {{#limit}} eleman içermeli',
		'array.max': '{{#label}} {{#limit}} az ya da eşit olmalı',
		'array.min': '{{#label}} en az {{#limit}} eleman içermeli',
		'boolean.base': '{{#label}} boolean olmalı',
		'date.base': '{{#label}} bir tarih olmalı',
		'number.base': '{{#label}} sayı olmalı',
		'number.integer': '{{#label}} bir tam sayı olmalı',
		'number.max': '{{#label}} {{#limit}} az ya da eşit olmalı',
		'number.min': '{{#label}} {{#limit}} büyük ya da eşit olmalı',
		'number.negative': '{{#label}} negatif olmalı',
		'number.positive': '{{#label}} pozitif olmalı',
		'number.greater': '{{#label}} değeri {{#root}} değerinden daha büyük olmalı',
		'object.base': '{{#label}} nesne (object) olmalı',
		'object.unknown': '{{#label}} geçerli girdi olmalı.',
		'string.alphanum': '{{#label}} sadece alfa-nümerik karakterler içermeli',
		'string.base': '{{#label}} bir dize olmalı',
		'string.base64': '{{#label}} geçerli bir base64 dizesi olmalı',
		'string.creditCard': '{{#label}} bir kredi kartı olmalı',
		'string.dataUri': '{{#label}} geçerli bir dataUri dizesi olmalı',
		'string.domain': '{{#label}} geçerli bir alan adı olmalı',
		'string.email': '{{#label}} geçerli bir e-mail olmalı',
		'string.empty': '{{#label}} boş bırakılamaz',
		'string.guid': '{{#label}} geçerli bir GUID olmalı',
		'string.hex': '{{#label}} sadece onaltılık (hexadecimal) karakterler içerebilir',
		'string.hexAlign': '{{#label}} onaltılık (hex) kodu çözülmüş açıklamalar byte\'larla hizalı olmalı',
		'string.hostname': '{{#label}} geçerli bir sunucu ismi olmalı',
		'string.ip': '{{#label}} geçerli bir IP adresi olmalı',
		'string.isoDate': '{{#label}} ISO formatında olmalı',
		'string.isoDuration': '{{#label}} geçerli bir ISO 8601 süresi (duration) olmalı',
		'string.length': '{{#label}} {{#limit}} karakterden oluşmalı',
		'string.lowercase': '{{#label}} sadece küçük harfler içerebilir',
		'string.max': '{{#label}} {{#limit}} az ya da eşit olmalı',
		'string.min': '{{#label}} en az {{#limit}} karakter olmalı',
		'string.normalize': '{{#label}} {{#form}} formunda normalleştirilmiş unicode olmalı',
		'string.token': '{{#label}} sadece alfa-nümerik ve alt çizgili (underscore) karakterler içerebilir',
		'string.pattern.base': '{{#label}} gereken düzene uymuyor: {{#regex}}',
		'string.trim': '{{#label}} başında ve sonunda boşluk olmamalı',
		'string.uri': '{{#label}} geçerli bir url olmalı',
		'string.uriRelativeOnly': '{{#label}} geçerli bir relative url olmalı',
		'string.uppercase': '{{#label}} sadece büyük harfler içermeli',
		'password': 'Şifre en az 8 karakter uzunluğunda olmalı, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.',
	},
};
