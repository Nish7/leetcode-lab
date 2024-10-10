class TimeMap {
    store: Map<string, [string, number][]>

    constructor() {
        this.store = new Map<string, [string, number][]>()
    }

    set(key: string, value: string, timestamp: number): void {
        let val: [string, number] = [value, timestamp]
        let kv = this.store.get(key)

        if (kv == undefined) {
            this.store.set(key, [val])
            return
        }

        kv.push(val)
    }

    get(key: string, timestamp: number): string {
        const keyVal = this.store.get(key)
        if (keyVal == undefined) return ''

        let left = 0
        let right = keyVal.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let [_, midT] = keyVal[mid]

            if (timestamp >= midT) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return left > 0 ? keyVal[left - 1][0] : ''
    }
}
