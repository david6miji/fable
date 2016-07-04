#
# FABLE 호스트 우버투스 라이브러리 용 Makefile
#

CROSS_PREFIX	= 	

TARGET			= 	ubertooth-debug

SRCS			= 	

SRCS			+= ubertooth.c
SRCS			+= cc2400.c
SRCS			+= ubertooth_control.c
SRCS			+= ubertooth-debug.c
SRCS			+= arglist.c

OBJS			= $(SRCS:.c=.o)

LIBS			=
LIBS			+= -lusb-1.0 
LIBS			+= /usr/local/lib/libbtbb.so 

INCLUDE_DIRS		= 
INCLUDE_DIRS		+= -I. 
INCLUDE_DIRS		+= -I/usr/include/libusb-1.0 
INCLUDE_DIRS		+= -I/usr/local/include  

LIB_DIRS			= 
# LIB_DIRS			+= -L../common

CFLAGS			= $(INCLUDE_DIRS)
# CFLAGS			+= -fPIC 
CFLAGS			+= -DENABLE_PCAP 
CFLAGS			+= -DRELEASE=\"GITDIR-NOTFOUND\" 
CFLAGS			+= -DVERSION=\"0.2\" 
CFLAGS			+= -Dubertooth_EXPORTS 
CFLAGS			+= 

ARFLAGS			= $(LIB_DIRS)
ARFLAGS			+= 
	
LDFLAGS			= $(LIB_DIRS)
LDFLAGS			+= 

#---------------------------------------------------------------------
CC				=	$(CROSS_PREFIX)gcc
CXX			 	=	$(CROSS_PREFIX)g++
AR				=	$(CROSS_PREFIX)ar rc
AR2				=	$(CROSS_PREFIX)ranlib
RANLIB			=	$(CROSS_PREFIX)ranlib
LD				=	$(CROSS_PREFIX)ld
NM				=	$(CROSS_PREFIX)nm
STRIP			=	$(CROSS_PREFIX)strip
OBJCOPY		 	=	$(CROSS_PREFIX)objcopy
OBJDUMP		 	=	$(CROSS_PREFIX)objdump
CP				=   cp
MV				=   mv
#--------------------------------------------------------------------

all : $(TARGET)

$(TARGET) : $(OBJS)
	$(CC) $(LDFLAGS) $(OBJS) -o $@ $(LIBS) 

%.o:%.c
	@echo "Compiling $< ..."
	$(CC) -c $(CFLAGS) -o $@ $<

dep :
	$(CC)	-M	$(INCLUDE_DIRS)	$(SRCS) > .depend

clean:
	rm -f *.bak
	rm -f *.map
	rm -f *.o
	rm -f *.d
	rm -f $(OBJS)

distclean: clean
	rm -rf .depend	


ifeq (.depend,$(wildcard .depend))
include .depend
endif

