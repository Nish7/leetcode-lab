// ["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]

// [[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

// check-in
// {
//      leyton: [[45, 3], [27, 10]]
//      paradise: [[32, 8]]
// }
//
// checkout:
// {
//    waterloo: [[45, 15], [27, 20]]
//    cambridge: [[32, 22]]
// }
//
// avgtime: leyton to waterloo
// for each p : mp[leyton]:
//      for each pb to waterloo:
//          if p.id == pb.id: // went from the leyton to waterloo
//              add to the sum.
//              increment the the counter
//
//
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * UndergroundSystem* obj = new UndergroundSystem();
 * obj->checkIn(id,stationName,t);
 * obj->checkOut(id,stationName,t);
 * double param_3 = obj->getAverageTime(startStation,endStation);
 */
#include <unordered_map>
#include <vector>
using namespace std;

class UndergroundSystem {
private:
  unordered_map<int, pair<string, int>> checkin; // id -> {waterloo, 3}
  unordered_map<string, vector<int>> routes;

public:
  UndergroundSystem() {}

  void checkIn(int id, string stationName, int t) {
    checkin[id] = {stationName, t};
  }

  void checkOut(int id, string stationName, int t) {
    const auto [checkinst, checkintime] = checkin[id];
    string routekey = checkinst + "-" + stationName;
    if (!routes.contains(routekey))
      routes[routekey] = {};
    routes[routekey].push_back(t - checkintime);
    checkin.erase(id);
  }

  double getAverageTime(string startStation, string endStation) {
    double totaltime = 0;
    auto trips = routes[startStation + "-" + endStation];
    for (auto t : trips) {
      totaltime += t;
    }

    return totaltime / trips.size();
  }
};
