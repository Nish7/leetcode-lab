#include <iostream>
#include <ranges>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  struct Entry {
    string st;
    string name;
    int time;
    int amount;
    string city;
  };
  vector<string> invalidTransactions(vector<string> &transactions) {
    // naive apprpach works fine
    // categorize the transaction per name
    // check for entry their respective transactions with n^2 approach if they
    unordered_map<string, vector<Entry>> tmap;
    vector<string> invalids;
    vector<Entry> entries;

    for (auto t : transactions) {
      auto sv = t | std::views::split(',');
      vector<string> values;
      for (auto v : sv) {
        values.emplace_back(v.begin(), v.end());
      }

      string name = values[0];
      int time = stoi(values[1]);
      int amount = stoi(values[2]);
      string city = values[3];
      auto e = Entry{t, name, time, amount, city};
      entries.push_back(e);
      if (!tmap.contains(name))
        tmap[name] = {};
      tmap[name].push_back(e);
    }

    for (auto e : entries) {
      bool isInvalid = false;
      for (auto lt : tmap[e.name]) {
        if (e.amount > 1000) {
          isInvalid = true;
          break;
        }

        if (abs(e.time - lt.time) <= 60 && e.city != lt.city) {
          isInvalid = true;
          break;
        }
      }

      if (isInvalid)
        invalids.push_back(e.st);
    }

    return invalids;
  }
};

int main() {
  Solution sol;
  vector<string> a = {"alice,20,800,mtv", "alice,50,100,beijing"};
  vector<string> b = {"alice,20,800,mtv", "alice,50,1200,mtv"};
  vector<string> c = {"alice,20,800,mtv", "bob,50,1200,mtv"};
  vector<string> d = {"alice,10,1200,mtv", "alice,30,800,asss"};
  vector<string> e = {"alice,20,800,mtv", "alice,50,100,mtv",
                      "alice,51,100,frankfurt"};
  vector<string> f = {"alice,20,1220,mtv", "alice,20,1220,mtv"};
  auto out = sol.invalidTransactions(e);
  for (auto c : out) {
    cout << c << endl;
  }
}
