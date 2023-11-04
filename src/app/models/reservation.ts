export class Reservation {
    public id: string;
    public checkInDate: Date;
    public checkOutDate: Date;
    public guestName: string;
    public guestEmail: string;
    public roomNumber: number;

    public constructor(id: string, checkInDate: Date, checkOutDate: Date, guestName: string, guestEmail: string, roomNumber: number) {
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.guestName = guestName;
        this.guestEmail = guestEmail;
        this.roomNumber = roomNumber;

    }
}
