
export interface BankList {
	bank_code: string;
	bank_name: string;
	perbifast_code: string;
	flip_bank_code: string;
	img_url: string;
	dana_bank_code: string;
	currency: string;
}

export interface SidebarMenu {
	link: string;
	label: string;
    icon: React.ReactNode,
	child: SidebarMenu[] | [];
}

export interface RangeDateHistoryDepositInterface {
	start: Date,
	end: Date
}

export type Document = {
	id: string;
	name: number;
	status: "inProgress" | "success" | "failed";
	sn: string;
	date: Date | string;
	no: string;
	jenis: string;
    action:any
};

// export const columns: ColumnDef<Document>[] = [
// 	{
// 		accessorKey: "name",
// 		header: "Document",
// 	},
// 	{
// 		accessorKey: "date",
// 		header: "Date",
// 	},
// 	{
// 		accessorKey: "status",
// 		header: "Status",
// 	},
// 	{
// 		accessorKey: "sn",
// 		header: "Serial Number",
// 	},
// 	{
// 		accessorKey: "no",
// 		header: "No Document",
// 	},
// 	{
// 		accessorKey: "jenis",
// 		header: "Jenis Document",
// 	},
// 	{
// 		accessorKey: "action",
// 		header: "Action",
// 	},
// ];