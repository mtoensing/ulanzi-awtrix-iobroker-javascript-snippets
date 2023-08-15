// Define the three data sources
const unten = 'meross.0.2103041151205926281048e1e9604c65.120027D27E24.latestTemperature';
const mitte = 'meross.0.1912184550583426280548e1e913c738.120027D1B3B3.latestTemperature';
const oben = 'meross.0.1912184550583426280548e1e913c738.120027D1FEEB.latestTemperature';

// Define the new object ID where you want to store the concatenated value
const newObjectID = 'meross_all';

// Create the "meross_all" state object if it doesn't exist
createState(newObjectID, '', {
  type: 'string',
  read: true,
  write: false,
  name: 'Concatenated temperature from Meross devices'
});

// Function to concatenate the values and store the result
function updateConcatenatedValue() {
  const value1 = Math.round(getState(unten).val);
  const value2 = Math.round(getState(mitte).val);
  let value3 = Math.round(getState(oben).val).toString(); // Convert value3 to a string

  if (value3.length >= 3) {
    value3 = value3.slice(0, 2); // Keep only the first two characters
  }

  const concatenatedValue = `${value1} ${value2} ${value3}`;

  // Update the "meross_all" state with the concatenated value using setState
  setState(newObjectID, concatenatedValue, true, function (err) {
    if (err) {
      console.error('Error while updating the concatenated value:', err);
    } else {
      console.log('Concatenated value updated successfully:', concatenatedValue);
    }
  });
}

// Initial update to populate the "meross_all" state
updateConcatenatedValue();

// Subscribe to the three data sources and register event handlers
on({ id: unten, change: 'any' }, updateConcatenatedValue);
on({ id: mitte, change: 'any' }, updateConcatenatedValue);
on({ id: oben, change: 'any' }, updateConcatenatedValue);
