export default function ReservationDetails() {
    return (
      <div className="w-1/4 bg-white p-4 border-l">
        <h2 className="text-lg font-semibold mb-2">Réservation</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Voiture" className="w-full" />
          <div className="p-4">
            <p className="font-bold">Paris, France</p>
            <p className="text-sm text-gray-500">Batmobile 16-20 avril</p>
            <p className="text-lg font-semibold mt-2">170€ par nuit</p>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Début: 16 avril</span>
              <span>Fin: 20 avril</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  