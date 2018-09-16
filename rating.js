// For full API documentation, including code examples, visit http://wix.to/94BuAAs

$w.onReady(function () {
	//TODO: write your page related code here...

});

export function dropdown1_change(event) {
	// get the current item from the dataset
const currentItem = $w("#dynamicDataset").getCurrentItem();
// get the current average rating and number of ratings
const average = currentItem.averageRating;
const count = currentItem.numRatings;
// get the new rating from the dropdown and make it a number
const newRating = Number($w('#dropdown1').value);
// calculate the new average rating based on the current average and count
const newAverage = ((average * count) + newRating) / (count + 1);
// save new average rating and total ratings to the collection
$w('#dynamicDataset').setFieldValues( {
    'averageRating': newAverage,
    'numRatings': count + 1
} );
$w('#dynamicDataset').save()
    .catch( (err) => {
    console.log('could not save new rating');
} );
// disable the dropdown
$w('#dropdown1').disable(); 
}