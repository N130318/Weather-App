/**
 * Created by namita on 7/26/16.
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';
import { AuthService }       from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(state.url);
        if (this.authService.isLoggedIn) { return true; };
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}

export const authProviders = [AuthGuard, AuthService];
