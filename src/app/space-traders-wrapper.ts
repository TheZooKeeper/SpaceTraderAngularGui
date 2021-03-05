import { SpaceTraders } from 'spacetraders-sdk/dist/index';
import {
    AccountResponse,
    AvailableLoanResponse, AvailableShipResponse, FlightPlanResponse, LoanType, LocationsResponse,
    MarketplaceResponse, PurchaseResponse, StatusResponse, TokenResponse
} from 'spacetraders-sdk/dist/types';

export class SpaceTradersWrapper {
    private static instance: SpaceTradersWrapper;
    private spaceTrade: SpaceTraders = new SpaceTraders();
    private uName = '';
    private token = '';

    // If we need to access the singleton
    public static getInstance(): SpaceTradersWrapper {
        if (!SpaceTradersWrapper.instance) {
            SpaceTradersWrapper.instance = new SpaceTradersWrapper();
        }

        return SpaceTradersWrapper.instance;
    }
    setUserName(uName: string): void {
        if(uName.length == 0) {
            alert("Username cannot be empty!");
            return;
        }
        if (confirm("This will immediately change the current user ID. Please update token as well. Are you sure?")) {
            this.uName = uName;
        }
    }
    getUserName(): string {
       return this.uName;
    }
    setToken(token: string): void {
        if(token.length == 0) {
            alert("Token cannot be empty!");
            return;
        }
        if (confirm("This will immediately change the current token and could break the game. Are you sure?")) {
            this.token = token;
        }
    }
    getToken(): string {
        return this.token;
     }
    setUserNameAndToken(uName: string, token: string): void {
        this.uName = uName;
        this.token = token;
    }
    getStatus(): Promise<StatusResponse> {
        return this.spaceTrade.getStatus();
    }
    createUser(): Promise<TokenResponse> {
        return this.spaceTrade.createUser(this.uName);
    }
    getAccount(): Promise<AccountResponse> {
        return this.spaceTrade.getAccount(this.uName, this.token);
    }
    createFlightPlan(shipId: string, destination: number): Promise<FlightPlanResponse> {
        return this.spaceTrade.createFlightPlan(this.uName, this.token, shipId, destination);
    }
    getFlightPlan(): Promise<FlightPlanResponse> {
        return this.spaceTrade.getFlightPlan(this.token);
    }
    getMarketplace(location: string): Promise<MarketplaceResponse> {
        return this.spaceTrade.getMarketplace(this.token, location);
    }
    listAsteroids(system?: string, type?: string): Promise<LocationsResponse> {
        return this.spaceTrade.listAsteroids(this.token, system, type);
    }
    purchaseGood(shipID: string, good: string, quantity: number): Promise<PurchaseResponse> {
        return this.spaceTrade.purchaseGood(this.uName, this.token, shipID, good, quantity);
    }
    purchaseShip(location: string, type: string): Promise<unknown> {
        return this.spaceTrade.purchaseShip(this.uName, this.token, location, type);
    }
    sellGood(shipID: string, good: string, quantity: number): Promise<PurchaseResponse> {
        return this.spaceTrade.sellGood(this.uName, this.token, shipID, good, quantity);
    }
    takeOutLoan(type: LoanType): Promise<unknown> {
        return this.spaceTrade.takeOutLoan(this.uName, this.token, type);
    }
    viewAvailableLoans(): Promise<AvailableLoanResponse> {
        return this.spaceTrade.viewAvailableLoans(this.token);
    }
    viewAvailableShips(): Promise<AvailableShipResponse> {
        return this.spaceTrade.viewAvailableShips(this.token);
    }
}
