import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private readonly user = { email: 'admin@example.com', password: 'password123', sub: 1 };

  async login(email: string, password: string): Promise<string | null> {
    if (email === this.user.email && password === this.user.password) {
      const payload = { email: this.user.email, sub: this.user.sub };
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
