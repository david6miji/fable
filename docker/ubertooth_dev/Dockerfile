FROM ubuntu:16.04
MAINTAINER David You <frog@falinux.com>

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update

RUN apt-get install  -y language-pack-ko
	 
# set locale ko_KR
RUN locale-gen ko_KR.UTF-8

ENV LANG ko_KR.UTF-8
ENV LANGUAGE ko_KR.UTF-8
ENV LC_ALL ko_KR.UTF-8

RUN apt-get install -y git
RUN apt-get install -y cmake libusb-1.0-0-dev make gcc g++ libbluetooth-dev pkg-config libpcap-dev python-numpy python-pyside python-qt4
RUN apt-get install -y wget

# libbtbb

WORKDIR /tmp/
RUN wget https://github.com/greatscottgadgets/libbtbb/archive/2015-10-R1.tar.gz -O libbtbb-2015-10-R1.tar.gz
RUN tar xf libbtbb-2015-10-R1.tar.gz
RUN cd libbtbb-2015-10-R1
RUN mkdir build

WORKDIR /tmp/libbtbb-2015-10-R1/build

RUN cmake /tmp/libbtbb-2015-10-R1/
RUN make
RUN make install

# Ubertooth tools
WORKDIR /tmp/
RUN wget https://github.com/greatscottgadgets/ubertooth/releases/download/2015-10-R1/ubertooth-2015-10-R1.tar.xz -O ubertooth-2015-10-R1.tar.xz
RUN tar xf ubertooth-2015-10-R1.tar.xz

WORKDIR /tmp/ubertooth-2015-10-R1/host/
RUN mkdir build
WORKDIR /tmp/ubertooth-2015-10-R1/host/build

RUN cmake /tmp/ubertooth-2015-10-R1/host/
RUN make
RUN  make install

RUN apt-get install -y gcc-arm-none-eabi

RUN apt-get install -y  usbutils

WORKDIR /work/
CMD ["bash"]

