import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Customer Login
  @UseGuards(JwtAuthGuard)
  @Post('user/login')
  async login(@Request() req, @Res({ passthrough: true }) res) {
    const { accessToken } = await this.authService.login(req.user);
    // save to cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    return accessToken;
  }

  // Employee Login
  @UseGuards(JwtAuthGuard)
  @Post('employee/login')
  async loginEmployee(@Request() req, @Res({ passthrough: true }) res) {
    const { accessToken } = await this.authService.login(req.user);
    // save to cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    return accessToken;
  }
}
