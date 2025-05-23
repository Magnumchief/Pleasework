import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, AlertCircle } from "lucide-react";
import { getInitials } from "@/lib/utils";

type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  email?: string;
  avatarUrl?: string;
  avatarColor?: string;
};

const contacts: ContactPerson[] = [
  {
    name: "Sister Zenande",
    role: "Service Management",
    phone: "+27 76 390 0275",
    email: "zenandeg@cect.co.za",
    avatarColor: "bg-purple-600",
  },
  {
    name: "Sister Tawa",
    role: "Youth Admin",
    phone: "+27 78 682 7044",
    avatarColor: "bg-green-600",
  },
  {
    name: "Sister Teekay",
    role: "LMAM HOD",
    phone: "+27 68 007 8408",
    avatarColor: "bg-blue-600",
  }
];

function ContactCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="text-xl mb-4">Contact Admin Team</CardTitle>
        <p className="text-muted-foreground mb-6">
          Need assistance with your uploads or have questions about required materials?
        </p>
        
        <div className="space-y-4 mb-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-start p-3 rounded-lg bg-muted/50">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                <AvatarFallback className={contact.avatarColor}>
                  {getInitials(contact.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-muted-foreground">{contact.role}</div>
                <a 
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                  className="text-primary hover:text-primary/80 text-sm flex items-center mt-1"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-lg p-4 text-foreground flex items-start border-l-4 border-primary">
          <AlertCircle className="h-6 w-6 mr-2 flex-shrink-0" />
          <p className="text-sm">
            If you are experiencing any challenge contact Numbi: <a href="tel:+27684438735" className="font-medium">+27 68 443 8735</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
