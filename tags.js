import wixData from 'wix-data';

$w.onReady(function () {
	const currentItem = $w('#dynamicDataset').getCurrentItem()

	const filter = wixData.filter().hasSome('tags', currentItem._id)
	$w('#dataset1').setFilter()
});