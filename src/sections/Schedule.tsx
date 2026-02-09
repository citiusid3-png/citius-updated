import { Calendar, Clock } from 'lucide-react';
import { officialSchedule } from '../data/officialSchedule';

export default function Schedule() {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'boys':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'girls':
        return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'mixed':
      case 'boys/girls':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getRoundColor = (round: string) => {
    switch (round.toLowerCase()) {
      case 'final':
        return 'bg-yellow-100 text-yellow-900 border-yellow-400';
      case 'heats':
      case 'heats/final':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'semifinal':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'ceremony':
      case 'special':
      case 'captains vs faculty':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Official Event Schedule
          </h2>
          <p className="text-lg text-blue-600 font-semibold mb-4">CITIUS 2025–26</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete athletics timetable for all three days of competition
          </p>
        </div>

        <div className="space-y-12">
          {officialSchedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sm:p-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                    <p className="text-sm text-blue-100">Day {day.dayNumber}</p>
                    <p className="text-3xl font-bold">{day.date}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{day.date.split(' ')[0]} February</h3>
                    <p className="text-blue-100">
                      {day.dayNumber === 1 && '3 events across 2 sessions'}
                      {day.dayNumber === 2 && '2 events across 2 sessions'}
                      {day.dayNumber === 3 && '2 events across 2 sessions'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="border-l-4 border-blue-300 pl-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                      <Clock className="text-blue-600" size={24} />
                      <span>{session.title}</span>
                    </h4>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-300">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm sm:text-base">
                              Time
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm sm:text-base">
                              Event
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm sm:text-base">
                              Category
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm sm:text-base">
                              Round
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {session.events.map((eventData, eventIndex) => (
                            <tr
                              key={eventIndex}
                              className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                            >
                              <td className="py-4 px-4 text-sm sm:text-base font-semibold text-blue-600 whitespace-nowrap">
                                {eventData.time}
                              </td>
                              <td className="py-4 px-4 text-sm sm:text-base text-gray-900 font-medium">
                                {eventData.event}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${getCategoryColor(
                                    eventData.category
                                  )}`}
                                >
                                  {eventData.category}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${getRoundColor(
                                    eventData.round
                                  )}`}
                                >
                                  {eventData.round}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Category Colors</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-300">
                  Boys
                </span>
                <span className="text-sm text-gray-700">Boys Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-pink-100 text-pink-800 border border-pink-300">
                  Girls
                </span>
                <span className="text-sm text-gray-700">Girls Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-300">
                  Mixed
                </span>
                <span className="text-sm text-gray-700">Mixed/All Events</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Round Types</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-900 border border-yellow-400">
                  Final
                </span>
                <span className="text-sm text-gray-700">Championship Round</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-300">
                  Heats
                </span>
                <span className="text-sm text-gray-700">Qualifying Heats</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-2 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300">
                  Semifinal
                </span>
                <span className="text-sm text-gray-700">Semifinal Round</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white md:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4 text-lg">Quick Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold mt-0.5">•</span>
                <span>Report 30 min before your event</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold mt-0.5">•</span>
                <span>Bring your institute ID</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold mt-0.5">•</span>
                <span>Follow all venue guidelines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
