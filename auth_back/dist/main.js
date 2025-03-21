/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/lib/src/decorators/cookie.decorator.ts":
/*!*****************************************************!*\
  !*** ./libs/lib/src/decorators/cookie.decorator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cookie = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.Cookie = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.cookies)
        return undefined;
    if (key && !request.cookies[key]) {
        return null;
    }
    return key ? request.cookies[key] : request.cookies;
});


/***/ }),

/***/ "./libs/lib/src/decorators/current-user.decorator.ts":
/*!***********************************************************!*\
  !*** ./libs/lib/src/decorators/current-user.decorator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((key, ctx) => {
    const user = ctx.switchToHttp().getRequest().user;
    return key ? user[key] : user;
});


/***/ }),

/***/ "./libs/lib/src/decorators/index.ts":
/*!******************************************!*\
  !*** ./libs/lib/src/decorators/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./cookie.decorator */ "./libs/lib/src/decorators/cookie.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./user-agent.decorator */ "./libs/lib/src/decorators/user-agent.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./current-user.decorator */ "./libs/lib/src/decorators/current-user.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.decorator */ "./libs/lib/src/decorators/role.decorator.ts"), exports);


/***/ }),

/***/ "./libs/lib/src/decorators/role.decorator.ts":
/*!***************************************************!*\
  !*** ./libs/lib/src/decorators/role.decorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./libs/lib/src/decorators/user-agent.decorator.ts":
/*!*********************************************************!*\
  !*** ./libs/lib/src/decorators/user-agent.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAgent = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.UserAgent = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['user-agent'];
});


/***/ }),

/***/ "./libs/lib/src/guards/index.ts":
/*!**************************************!*\
  !*** ./libs/lib/src/guards/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./role.guard */ "./libs/lib/src/guards/role.guard.ts"), exports);


/***/ }),

/***/ "./libs/lib/src/guards/role.guard.ts":
/*!*******************************************!*\
  !*** ./libs/lib/src/guards/role.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const decorators_1 = __webpack_require__(/*! lib/lib/decorators */ "./libs/lib/src/decorators/index.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(decorators_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const token_module_1 = __webpack_require__(/*! ./token/token.module */ "./src/token/token.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            token_module_1.TokenModule,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/auth/dto/index.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const decorators_1 = __webpack_require__(/*! lib/lib/decorators */ "./libs/lib/src/decorators/index.ts");
const responses_1 = __webpack_require__(/*! src/user/responses */ "./src/user/responses/index.ts");
const google_guard_1 = __webpack_require__(/*! ./guards/google.guard */ "./src/auth/guards/google.guard.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const login_guard_1 = __webpack_require__(/*! ./guards/login.guard */ "./src/auth/guards/login.guard.ts");
const register_guard_1 = __webpack_require__(/*! ./guards/register.guard */ "./src/auth/guards/register.guard.ts");
const token_service_1 = __webpack_require__(/*! src/token/token.service */ "./src/token/token.service.ts");
let AuthController = class AuthController {
    constructor(authService, tokenService, configService, httpService) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.configService = configService;
        this.httpService = httpService;
    }
    async register(dto) {
        const user = await this.authService.register(dto);
        if (!user) {
            throw new common_1.BadRequestException(`Не получается зарегистрировать пользователя с данными ${JSON.stringify(dto)}`);
        }
        return new responses_1.userResponse(user);
    }
    async login(dto, res, agent) {
        const tokens = await this.authService.login(dto, agent);
        if (!tokens) {
            throw new common_1.BadRequestException(`Не получается зайти с данными ${JSON.stringify(dto)}`);
        }
        return this.tokenService.setTokensToCookies(tokens, res);
    }
    async logout(refreshToken, res) {
        if (!refreshToken) {
            res.sendStatus(common_1.HttpStatus.OK);
            return;
        }
        await this.tokenService.deleteRefreshToken(refreshToken);
        res.cookie('refreshtoken', '', {
            httpOnly: true,
            secure: true,
            expires: new Date(),
        });
        res.cookie('accesstoken', '', {
            httpOnly: true,
            secure: true,
            expires: new Date(),
        });
        res.sendStatus(common_1.HttpStatus.OK);
    }
    googleAuth() { }
    googleAuthCallback(req, res, agent) {
        if (!req.user) {
            throw new common_1.BadRequestException('не получается получить токен из Google auth');
        }
        const token = req.user['accessToken'];
        this.httpService
            .get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`)
            .pipe((0, rxjs_1.mergeMap)(({ data: { email } }) => this.authService.providerAuth(email, agent, client_1.Provider.GOOGLE)), (0, rxjs_1.tap)((tokens) => this.tokenService.setTokensToCookies(tokens, res, true)))
            .subscribe({
            error: (err) => res.status(400).json({ message: err.message }),
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UseGuards)(register_guard_1.RegisterGuard),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.AuthDto !== "undefined" && dto_1.AuthDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(login_guard_1.LoginGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, decorators_1.UserAgent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.AuthDto !== "undefined" && dto_1.AuthDto) === "function" ? _f : Object, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, decorators_1.Cookie)('refreshtoken')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(google_guard_1.GoogleGuard),
    (0, common_1.Get)('google'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.UseGuards)(google_guard_1.GoogleGuard),
    (0, common_1.Get)('google/callback'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, decorators_1.UserAgent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuthCallback", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _d : Object])
], AuthController);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const strategies_1 = __webpack_require__(/*! ./strategies */ "./src/auth/strategies/index.ts");
const guards_1 = __webpack_require__(/*! ./guards */ "./src/auth/guards/index.ts");
const token_module_1 = __webpack_require__(/*! src/token/token.module */ "./src/token/token.module.ts");
const prisma_module_1 = __webpack_require__(/*! src/prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, ...strategies_1.STRATEGIES, ...guards_1.GUARDS],
        imports: [
            passport_1.PassportModule,
            token_module_1.TokenModule,
            prisma_module_1.PrismaModule,
            axios_1.HttpModule,
            config_1.ConfigModule,
            user_module_1.UserModule,
        ],
    })
], AuthModule);


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const token_service_1 = __webpack_require__(/*! src/token/token.service */ "./src/token/token.service.ts");
const password_helper_1 = __webpack_require__(/*! ./helpers/password.helper */ "./src/auth/helpers/password.helper.ts");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, tokenService, prisma) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.prisma = prisma;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async register(dto) {
        const password = dto.password ? (0, password_helper_1.hashPassword)(dto.password) : null;
        const user = await this.userService.create({ ...dto, password });
        return user;
    }
    async login(dto, agent) {
        const user = await this.userService
            .findOne({ email: dto.email })
            .catch((e) => {
            this.logger.error(e);
            return null;
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Неверная почта или пароль');
        }
        return this.tokenService.generateTokens(user, agent);
    }
    async providerAuth(email, agent, provider) {
        const UserExist = await this.userService.findOne({ email });
        if (UserExist) {
            return this.tokenService.generateTokens(UserExist, agent);
        }
        const user = await this.userService
            .create({ email, provider })
            .catch((e) => {
            this.logger.error(e);
            return null;
        });
        if (!user) {
            throw new common_1.BadRequestException(`не получилось создать пользователя с email ${email} в Google auth`);
        }
        return this.tokenService.generateTokens(user, agent);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object, typeof (_c = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./src/auth/dto/auth.dto.ts":
/*!**********************************!*\
  !*** ./src/auth/dto/auth.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AuthDto {
}
exports.AuthDto = AuthDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/auth/dto/index.ts":
/*!*******************************!*\
  !*** ./src/auth/dto/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.dto */ "./src/auth/dto/auth.dto.ts"), exports);


/***/ }),

/***/ "./src/auth/guards/google.guard.ts":
/*!*****************************************!*\
  !*** ./src/auth/guards/google.guard.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let GoogleGuard = class GoogleGuard extends (0, passport_1.AuthGuard)('google') {
};
exports.GoogleGuard = GoogleGuard;
exports.GoogleGuard = GoogleGuard = __decorate([
    (0, common_1.Injectable)()
], GoogleGuard);


/***/ }),

/***/ "./src/auth/guards/index.ts":
/*!**********************************!*\
  !*** ./src/auth/guards/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GUARDS = void 0;
const google_guard_1 = __webpack_require__(/*! ./google.guard */ "./src/auth/guards/google.guard.ts");
const login_guard_1 = __webpack_require__(/*! ./login.guard */ "./src/auth/guards/login.guard.ts");
const register_guard_1 = __webpack_require__(/*! ./register.guard */ "./src/auth/guards/register.guard.ts");
exports.GUARDS = [login_guard_1.LoginGuard, register_guard_1.RegisterGuard, google_guard_1.GoogleGuard];


/***/ }),

/***/ "./src/auth/guards/login.guard.ts":
/*!****************************************!*\
  !*** ./src/auth/guards/login.guard.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoginGuard_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const password_helper_1 = __webpack_require__(/*! ../helpers/password.helper */ "./src/auth/helpers/password.helper.ts");
let LoginGuard = LoginGuard_1 = class LoginGuard {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(LoginGuard_1.name);
    }
    async canActivate(ctx) {
        const dto = ctx.switchToHttp().getRequest().body;
        const user = await this.userService.findOne({ email: dto.email });
        this.logger.log(user);
        if (!user) {
            throw new common_1.BadRequestException('Неверная почта или пароль');
        }
        if (user.password) {
            return (0, password_helper_1.comparePasswords)(dto.password, user.password);
        }
        return false;
    }
};
exports.LoginGuard = LoginGuard;
exports.LoginGuard = LoginGuard = LoginGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], LoginGuard);


/***/ }),

/***/ "./src/auth/guards/register.guard.ts":
/*!*******************************************!*\
  !*** ./src/auth/guards/register.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
let RegisterGuard = class RegisterGuard {
    constructor(userService) {
        this.userService = userService;
    }
    async canActivate(ctx) {
        const dto = ctx.switchToHttp().getRequest().body;
        const user = await this.userService.findOne({ email: dto.email });
        if (user) {
            throw new common_1.UnauthorizedException('такой пользователь уже есть');
        }
        return true;
    }
};
exports.RegisterGuard = RegisterGuard;
exports.RegisterGuard = RegisterGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], RegisterGuard);


/***/ }),

/***/ "./src/auth/helpers/password.helper.ts":
/*!*********************************************!*\
  !*** ./src/auth/helpers/password.helper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const hashPassword = (password) => {
    return password ? (0, bcrypt_1.hashSync)(password, (0, bcrypt_1.genSaltSync)(10)) : null;
};
exports.hashPassword = hashPassword;
const comparePasswords = async (password, hashedPassword) => {
    return await (0, bcrypt_1.compare)(password, hashedPassword);
};
exports.comparePasswords = comparePasswords;


/***/ }),

/***/ "./src/auth/strategies/google.strategy.ts":
/*!************************************************!*\
  !*** ./src/auth/strategies/google.strategy.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_google_oauth20_1 = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(configService) {
        super({
            clientID: configService.get('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: `http://localhost:3000/auth/google/callback`,
            scope: ['email', 'profile'],
        });
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken,
        };
        done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], GoogleStrategy);


/***/ }),

/***/ "./src/auth/strategies/index.ts":
/*!**************************************!*\
  !*** ./src/auth/strategies/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STRATEGIES = void 0;
const google_strategy_1 = __webpack_require__(/*! ./google.strategy */ "./src/auth/strategies/google.strategy.ts");
exports.STRATEGIES = [google_strategy_1.GoogleStrategy];


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService]
    })
], PrismaModule);


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "./src/token/config/index.ts":
/*!***********************************!*\
  !*** ./src/token/config/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-module-async-options */ "./src/token/config/jwt-module-async-options.ts"), exports);


/***/ }),

/***/ "./src/token/config/jwt-module-async-options.ts":
/*!******************************************************!*\
  !*** ./src/token/config/jwt-module-async-options.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.options = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const options = () => ({
    inject: [config_1.ConfigService],
    useFactory: (config) => ({
        signOptions: {
            expiresIn: config.get('JWT_EXP', '10m'),
        },
    }),
});
exports.options = options;


/***/ }),

/***/ "./src/token/guards/access-token.guard.ts":
/*!************************************************!*\
  !*** ./src/token/guards/access-token.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class AccessTokenGuard extends (0, passport_1.AuthGuard)('access-strategy') {
}
exports.AccessTokenGuard = AccessTokenGuard;


/***/ }),

/***/ "./src/token/guards/index.ts":
/*!***********************************!*\
  !*** ./src/token/guards/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GUARDS = void 0;
const access_token_guard_1 = __webpack_require__(/*! ./access-token.guard */ "./src/token/guards/access-token.guard.ts");
const refresh_token_guard_1 = __webpack_require__(/*! ./refresh-token.guard */ "./src/token/guards/refresh-token.guard.ts");
__exportStar(__webpack_require__(/*! ./access-token.guard */ "./src/token/guards/access-token.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./refresh-token.guard */ "./src/token/guards/refresh-token.guard.ts"), exports);
exports.GUARDS = [access_token_guard_1.AccessTokenGuard, refresh_token_guard_1.RefreshTokenGuard];


/***/ }),

/***/ "./src/token/guards/refresh-token.guard.ts":
/*!*************************************************!*\
  !*** ./src/token/guards/refresh-token.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class RefreshTokenGuard extends (0, passport_1.AuthGuard)('refresh-strategy') {
}
exports.RefreshTokenGuard = RefreshTokenGuard;


/***/ }),

/***/ "./src/token/interfaces.ts":
/*!*********************************!*\
  !*** ./src/token/interfaces.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/token/strategies/access-jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/token/strategies/access-jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessJwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
let AccessJwtStrategy = class AccessJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'access-strategy') {
    constructor(configService, userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (req) => {
                    if (req.cookies['accesstoken']) {
                        return req.cookies['accesstoken'];
                    }
                    throw new common_1.UnauthorizedException();
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow('JWT_ACCESS_SECRET'),
        });
        this.configService = configService;
        this.userService = userService;
    }
    async validate(payload) {
        const user = await this.userService.findOne({ id: payload.id });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return payload;
    }
};
exports.AccessJwtStrategy = AccessJwtStrategy;
exports.AccessJwtStrategy = AccessJwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], AccessJwtStrategy);


/***/ }),

/***/ "./src/token/strategies/index.ts":
/*!***************************************!*\
  !*** ./src/token/strategies/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STRATEGIES = void 0;
const access_jwt_strategy_1 = __webpack_require__(/*! ./access-jwt.strategy */ "./src/token/strategies/access-jwt.strategy.ts");
const refresh_jwt_strategy_1 = __webpack_require__(/*! ./refresh-jwt.strategy */ "./src/token/strategies/refresh-jwt.strategy.ts");
__exportStar(__webpack_require__(/*! ./access-jwt.strategy */ "./src/token/strategies/access-jwt.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./refresh-jwt.strategy */ "./src/token/strategies/refresh-jwt.strategy.ts"), exports);
exports.STRATEGIES = [refresh_jwt_strategy_1.RefreshJwtStrategy, access_jwt_strategy_1.AccessJwtStrategy];


/***/ }),

/***/ "./src/token/strategies/refresh-jwt.strategy.ts":
/*!******************************************************!*\
  !*** ./src/token/strategies/refresh-jwt.strategy.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshJwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
let RefreshJwtStrategy = class RefreshJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'refresh-strategy') {
    constructor(configService, userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (req) => {
                    if (req.cookies['refreshtoken']) {
                        return req.cookies['refreshtoken'];
                    }
                    throw new common_1.UnauthorizedException();
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow('JWT_REFRESH_SECRET'),
        });
        this.configService = configService;
        this.userService = userService;
    }
    async validate(payload) {
        const user = await this.userService.findOne({ id: payload.id });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return payload;
    }
};
exports.RefreshJwtStrategy = RefreshJwtStrategy;
exports.RefreshJwtStrategy = RefreshJwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], RefreshJwtStrategy);


/***/ }),

/***/ "./src/token/token.controller.ts":
/*!***************************************!*\
  !*** ./src/token/token.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const decorators_1 = __webpack_require__(/*! lib/lib/decorators */ "./libs/lib/src/decorators/index.ts");
const token_service_1 = __webpack_require__(/*! ./token.service */ "./src/token/token.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const guards_1 = __webpack_require__(/*! ./guards */ "./src/token/guards/index.ts");
let TokenController = class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    async refresh(refreshToken, res, agent) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        const tokens = await this.tokenService.refreshTokens(refreshToken, agent);
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        this.tokenService.setTokensToCookies(tokens, res);
    }
};
exports.TokenController = TokenController;
__decorate([
    (0, common_1.UseGuards)(guards_1.RefreshTokenGuard),
    (0, common_1.Get)('refresh'),
    __param(0, (0, decorators_1.Cookie)('refreshtoken')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, decorators_1.UserAgent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "refresh", null);
exports.TokenController = TokenController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [typeof (_a = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _a : Object])
], TokenController);


/***/ }),

/***/ "./src/token/token.module.ts":
/*!***********************************!*\
  !*** ./src/token/token.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const token_controller_1 = __webpack_require__(/*! ./token.controller */ "./src/token/token.controller.ts");
const token_service_1 = __webpack_require__(/*! ./token.service */ "./src/token/token.service.ts");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
const prisma_module_1 = __webpack_require__(/*! src/prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! ./config */ "./src/token/config/index.ts");
const strategies_1 = __webpack_require__(/*! ./strategies */ "./src/token/strategies/index.ts");
const guards_1 = __webpack_require__(/*! ./guards */ "./src/token/guards/index.ts");
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService, ...strategies_1.STRATEGIES, ...guards_1.GUARDS],
        exports: [token_service_1.TokenService, ...guards_1.GUARDS],
        imports: [user_module_1.UserModule, prisma_module_1.PrismaModule, jwt_1.JwtModule.registerAsync((0, config_1.options)())],
    })
], TokenModule);


/***/ }),

/***/ "./src/token/token.service.ts":
/*!************************************!*\
  !*** ./src/token/token.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
let TokenService = class TokenService {
    constructor(jwtService, prisma, configService, userService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configService = configService;
        this.userService = userService;
    }
    async generateTokens(user, agent) {
        const accessToken = this.jwtService.sign({
            id: user.id,
            email: user.email,
            roles: user.roles,
        }, {
            expiresIn: '10m',
            secret: this.configService.get('JWT_ACCESS_SECRET'),
        });
        const refreshToken = await this.getRefreshToken(user.id, agent);
        return { accessToken, refreshToken };
    }
    setTokensToCookies(tokens, res, shouldRedirect = false) {
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        res.cookie('refreshtoken', tokens.refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 31 * 24 * 60 * 60 * 1000,
            secure: this.configService.get('NODE_ENV', 'development') === 'production',
            path: '/',
        });
        res.cookie('accesstoken', tokens.accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 10 * 60 * 1000,
            secure: this.configService.get('NODE_ENV', 'development') === 'production',
            path: '/',
        });
        shouldRedirect
            ? res.redirect(this.configService.get('ACCESS_PROVIDER_REDIRECT_URL', 'http://localhost:5173/me'))
            : res.sendStatus(common_1.HttpStatus.CREATED);
    }
    deleteRefreshToken(token) {
        return this.prisma.token.delete({
            where: {
                token,
            },
        });
    }
    async refreshTokens(refreshToken, agent) {
        const token = await this.prisma.token.delete({
            where: {
                token: refreshToken,
            },
        });
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        if (new Date(token.exp) < new Date()) {
            throw new common_1.UnauthorizedException();
        }
        const user = await this.userService.findOne({ id: token.userId });
        if (!user) {
            throw new common_1.BadRequestException('не получилось найти пользователя по токену');
        }
        return this.generateTokens(user, agent);
    }
    async getRefreshToken(userId, agent) {
        const generatedRefreshToken = this.jwtService.sign({
            id: userId,
        }, {
            expiresIn: '10m',
            secret: this.configService.get('JWT_REFRESH_SECRET'),
        });
        const _token = await this.prisma.token.findFirst({
            where: { userId, userAget: agent },
        });
        const token = _token?.token ?? '';
        const { token: refreshToken } = await this.prisma.token.upsert({
            where: { token },
            update: {
                token: generatedRefreshToken,
                exp: (0, date_fns_1.add)(new Date(), { months: 1 }),
            },
            create: {
                token: generatedRefreshToken,
                exp: (0, date_fns_1.add)(new Date(), { months: 1 }),
                userId,
                userAget: agent,
            },
        });
        return refreshToken;
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _d : Object])
], TokenService);


/***/ }),

/***/ "./src/user/responses/index.ts":
/*!*************************************!*\
  !*** ./src/user/responses/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.response */ "./src/user/responses/user.response.ts"), exports);


/***/ }),

/***/ "./src/user/responses/user.response.ts":
/*!*********************************************!*\
  !*** ./src/user/responses/user.response.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userResponse = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class userResponse {
    constructor(user) {
        Object.assign(this, user);
    }
}
exports.userResponse = userResponse;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], userResponse.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], userResponse.prototype, "provider", void 0);


/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const responses_1 = __webpack_require__(/*! ./responses */ "./src/user/responses/index.ts");
const decorators_1 = __webpack_require__(/*! lib/lib/decorators */ "./libs/lib/src/decorators/index.ts");
const interfaces_1 = __webpack_require__(/*! src/token/interfaces */ "./src/token/interfaces.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const guards_1 = __webpack_require__(/*! src/token/guards */ "./src/token/guards/index.ts");
const guards_2 = __webpack_require__(/*! lib/lib/guards */ "./libs/lib/src/guards/index.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async finOne(id) {
        const user = await this.userService.findOne({ id });
        if (!user) {
            throw new common_1.BadRequestException(`Невозможно найти пользователя с id  ${id}`);
        }
        return new responses_1.userResponse(user);
    }
    async deleteMyself(user) {
        await this.userService.delete({ where: { id: user.id } });
        return true;
    }
    async deleteOne(id) {
        await this.userService.delete({ where: { id } });
        return true;
    }
    me(user) {
        return user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "finOne", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.AccessTokenGuard),
    (0, common_1.Delete)('delete-myself'),
    __param(0, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteMyself", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.AccessTokenGuard, guards_2.RolesGuard),
    (0, decorators_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(guards_1.AccessTokenGuard),
    __param(0, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof interfaces_1.JwtPayLoad !== "undefined" && interfaces_1.JwtPayLoad) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "me", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./src/user/user.controller.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user) {
        return await this.prisma.user.create({
            data: {
                ...user,
                roles: [client_1.Role.USER],
                provider: user.provider ? user.provider : null,
            },
        });
    }
    async findOne(where) {
        const user = await this.prisma.user.findFirst({
            where,
        });
        if (!user) {
            return null;
        }
        return user;
    }
    async delete(args) {
        await this.prisma.user.delete({
            ...args,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.enableCors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;