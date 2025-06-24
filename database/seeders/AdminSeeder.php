<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('admin@123!'),
            ]
        );

        $role = \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'super_admin']);
        if (!$user->hasRole($role)) {
            $user->assignRole($role);
        }
    }
}
