import {Injectable} from "@angular/core";
import {StorageService} from "@cemizm/smartmirror-shared";

interface Cache<T> {
  stored: Date;
  data: T;
}

/**
 * Service to store and load Objects from Cache
 */
@Injectable()
export class DataCacheService {

  constructor(private storage: StorageService) {
  }

  /**
   * Adds an object to the cache
   * @param key The key of the data to identify
   * @param data The data to store in the cache
   */
  setData<T>(key: string, data: T) {
    let cache: Cache<T> = {stored: new Date(), data: data};

    this.storage.setItem(key, JSON.stringify(cache));
  }

  /**
   * Retrives an object from the cache
   * @param key The key of the data to identify
   * @return The retrived data from cache if exists, otherwise null
   */
  getData<T>(key: string): T {
    let data = this.storage.getItem(key);
    if (data == null)
      return null;

    let cache = <Cache<T>>JSON.parse(data);
    if(cache == null)
      return null;

    return cache.data;
  }

}
