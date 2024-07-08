import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
const [mood, setMood] = useState('happy');

// Calls setMood with a fixed value of 'ecstatic'
// begin with 'handle' prefix by convention
 const handleWinLotto = () => {
    setMood('ecstatic')
    console.log(mood) 
    } 

// Calls setMood with a conditional state value
const handleRunningLate = () => {
    let newMood = 'stressed';
    if (mood === 'stressed') newMood = 'really stressed'
    else if (mood === 'really stressed') newMood = 'giving up';
    setMood(newMood)
    }

return (
    <div className="MoodChanger componentBox">
    Current Mood: {mood}

{/* Change the mood state by calling setMood
when a button is clicked */}

<button
 onClick={() => setMood('tired')}>
 Stay Up Late
</button>
<button
 onClick={() => setMood('hungry')}>
 Skip Lunch
</button>
<button onClick={handleRunningLate}>Running Late</button>
 <button onClick={handleWinLotto}>Win Lotto</button>

{/* ++ Add these buttons and some of your own
to MoodChanger and try it out! */}

    </div>
    )

   }

   export default MoodChanger;