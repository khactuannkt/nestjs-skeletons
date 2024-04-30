import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
export default class DataSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    try {
     // Your seed data here
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
