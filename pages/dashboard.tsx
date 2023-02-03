import { createAvatar } from '@dicebear/core';
import * as peeps from '@dicebear/open-peeps';
let crypto = require("crypto");

const genAvatar = () => {
  // const randomString = "nTHnoVek1Kgvgasdasb1g"
  const id = crypto.randomBytes(10).toString('hex');
  const avatar = createAvatar(peeps, {
    // seed: randomString,
    seed: crypto.randomBytes(20).toString('hex'),
    // ... other options
  });
  return avatar.toDataUriSync();
}


export default function Dashboard() {

  return (
    <div className="w-full max-w-[1280px]">
      <h1 className="text-4xl font-bold mb-8">User: &lt;UserName Here&gt;</h1>

      <div>
        <img src={genAvatar()} loading="lazy"/>
      </div>

      <section className="w-full mb-8">
        <h2 className="text-3xl">Completed</h2>
        <div className="flex flex-col gap-4 py-4">
          
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Ongoing</h2>
        <div className="flex flex-col gap-4 py-4">
          
        </div>
      </section>
      
    </div>
  )
}