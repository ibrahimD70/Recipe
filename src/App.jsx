import React from 'react';
import banner from './assets/images/image-omelette.jpeg';

const App = () => {
  return (
    <div className='w-96 py-16 px-6 pt-5 bg-white rounded-3xl space-y-5 md:w-w2 lg:'>
      <img src={banner} alt='banner' className='rounded-3xl'/>
      <h1 className='font-bold font-xw text-3xl'>Simple Omelette Recipe</h1>
      <p className='text-xs'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <div className='w-full py-5 px-6 bg-red-50 space-y-5'>
          <h1 className='font-bold text-yellow-900'>Preparation time</h1>
          <ul className='list-disc text-xs space-y-3 pl-5 font-mono'>
            <li><span className='font-bold'>Total</span>: Approximately 10 minutes</li>
            <li><span className='font-bold'>Preparation</span>: 5 minutes</li>
            <li><span className='font-bold'>Cooking</span>: 5 minutes</li>
          </ul>
      </div>
      <h1 className='font-bold font-xw text-yellow-900 text-2xl'>Ingredients</h1>
      <div className='pl-5'>
      <ul className='list-disc text-xs space-y-3 font-mono'>
            <li> 2-3 large eggs</li>
            <li> Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
          </div>
          <hr />
      <h1 className='font-bold font-xw text-yellow-900 text-2xl'>Instruction</h1>
      <div className='pl-5'>
      <ol className=' list-decimal text-xs space-y-3 font-mono text-yellow-900 font-black'>
            <li><span className='text-black font-extrabold'>Beat the eggs:</span> <span className='text-black font-thin text-xs'>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.</span></li>
  <li><span className='text-black font-extrabold'>Heat the pan:</span> <span className='text-black font-thin text-xs'>Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
  <li><span className='text-black font-extrabold'>Cook the omelette:</span> <span className='text-black font-thin text-xs'>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.</span></li>
  <li><span className='text-black font-extrabold'>Add fillings (optional):</span> <span className='text-black font-thin text-xs'>When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
  <li><span className='text-black font-extrabold'>Fold and serve:</span> <span className='text-black font-thin text-xs'>As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
  <li><span className='text-black font-extrabold'>Enjoy:</span> <span className='text-black font-thin text-xs'> Serve hot, with additional salt and pepper if needed.</span></li>
          </ol>
          </div>
          <hr />
          <h1 className='font-bold font-xw text-yellow-900 text-2xl'>Nutrition</h1>
          <span className='text-black font-thin text-xs font-sans'>The table below shows nutritional values per serving without the additional fillings.</span>
               <table className='w-full h-64 space-x-64 '>
                <tbody>
                <tr className='border-b-2'>
                  <td>Colories</td>
                  <td className='font-bold text-yellow-900'>277kcl</td>
                </tr>
                <tr className='border-b-2'>
                  <td>Carbs</td>
                  <td className='font-bold text-yellow-900'>0g</td>
                </tr>
                <tr className='border-b-2'>
                  <td>Proteins</td>
                  <td className='font-bold text-yellow-900'>20g</td>
                </tr>
                <tr className='border-b-2 mt-10'>
                  <td>Fat</td>
                  <td className='font-bold text-yellow-900'>22g</td>
                </tr>
                </tbody>
               </table>
    </div>
  );
}

export default App;