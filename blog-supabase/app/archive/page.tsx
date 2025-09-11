import ArchiveCard from "@/components/card/ArchiveCard";
import { Card } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="w-full">
      <Card>
        <ArchiveCard />
      </Card>
    </div>
  );
};

export default Page;

{
  /* Timeline items */
}
//   <div className="space-y-8">
//   {timelineItems.map((item, index) => (
//     <div
//       key={item.id}
//       className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
//     >
//       {/* Content */}
//       <div className={`w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
//         <div className="flex items-center mb-2">
//           <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white mr-2`}>
//             {item.icon}
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
//         </div>
//         <p className="text-gray-600 text-right">{item.description}</p>
//         <span className="text-sm text-gray-500 mt-2 block">{item.date}</span>
//       </div>

//       {/* Dot */}
//       <div className={`absolute left-1/2 w-6 h-6 rounded-full ${item.color} transform -translate-x-1/2 border-4 border-white`}></div>

//       {/* Date on the opposite side */}
//       <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
//         <span className="text-lg font-medium text-gray-900">{item.date}</span>
//       </div>
//     </div>
//   ))}
// </div>
