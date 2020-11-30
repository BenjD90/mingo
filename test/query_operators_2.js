import test from 'tape'
import mingo from '../lib'

const collection = [
	{
		"sku": "KNE_OC42",
		"externalReferences": [
			{
				"value": "KNE_OC42-midas",
			}
		]
	},
	{
		"sku": "KNE_OCS3",
		"externalReferences": [
			{
				"value": "KNE_OCS3-midas",
			}
		]
	}
];

test('Logical Operators', function (t) {
	let queries = [
		[{
			"$or": [
				{ "sku": "KNE_OCS3" },
				{ "externalReferences.value": { "$in": ["KNE_OCS3-midas"] } }
			]
		}, 'Match only one element'],
	];

	queries.forEach(function (q) {
		t.ok(new mingo.Query(q[0]).find(collection).all().length === 1, q[1])
	});

	t.end()
});
