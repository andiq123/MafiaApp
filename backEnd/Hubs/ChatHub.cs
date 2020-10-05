using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace backEnd.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.Others.SendAsync("ReceiveMessage", message);
        }
        public async override Task OnConnectedAsync()
        {
            await Clients.Others.SendAsync("SomeonConnected");
        }
    }
}