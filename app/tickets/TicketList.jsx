import Link from "next/link";
import React from "react";



async function getTickets() {

  await new Promise(resolve => setTimeout(resolve,3000))
  
  const res = await fetch("http://localhost:4000/tickets",
  {
    next:{
      // revalidate:30    // revalidate when this time passed,while it use cache . not when refresh page  //30seg
      revalidate:0 //use 0 to opt out of using cache   // slower   

    }
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
          
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
          <p className="text-center">There are no open tickets, yay!!</p>
      )}
    </div>

  );
}
