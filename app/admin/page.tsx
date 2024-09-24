import { columns, Payment } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import StatCard from "@/components/ui/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Admin = async () => {
  const data = await getData();

  const appointments = await getRecentAppointmentList();
  return (
    <div className="m-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assetsicons/WLogo.svg"
            height={50}
            width={50}
            alt="Logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admi-stat">
          <StatCard
            type="appointments"
            count={appointments.ScheduledCount}
            label="Scheduled Appointments"
            icon="/assetsicons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending Appointments"
            icon="/assetsicons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled Appointments"
            icon="/assetsicons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
        <DataTable columns={columns} data={data} />
      
      </main>
    </div>
  );
};

export default Admin;
