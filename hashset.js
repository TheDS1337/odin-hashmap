export default class HashSet
{
    capacity = 16;
    loadFactor = 0.75;

    constructor()
    {
        this.buckets = new Array(this.capacity);
        this.bucketsUsed = 0;
    }

    hash(key)
    {
        const primeNumber = 31;
        let hashCode = 0;

        for( let i = 0; i < key.length; i++ ) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }

        return hashCode;
    }

    set(key)
    {
        const bucketIndex = this.hash(key);

        if( !this.buckets[bucketIndex] ) {
            if( ++this.bucketsUsed > this.capacity * this.loadFactor ) {
                this.capacity *= 2;
                this.buckets.length = this.capacity;
            }
        }

        this.buckets[bucketIndex] = key;
    }

    get(key)
    {
        const bucket = this.buckets[bucketIndex];
        return bucket ?? null; 
    }

    has(key)
    {
        return this.buckets[this.hash(key)] ? true : false;
    }

    remove(key)
    {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        if( bucket && bucket.key == key ) {
            delete this.buckets[bucketIndex];
            this.bucketsUsed--;
            return true;
        }
        
        return false;
    }

    length()
    {
        return this.bucketsUsed;
    }

    clear()
    {
        for( let i = 0; i < this.capacity; i++ ) {
            if( this.buckets[i] )
                delete this.buckets[i];
        }

        this.bucketsUsed = 0;
    }

    keys()
    {
        let keys = [];

        for( let i = 0; i < this.capacity; i++ ) {
            const bucket = this.buckets[i];

            if( bucket )
                keys.push(bucket);
        }

        return keys;
    }
}